<template>
  <base-widget 
    id="add-belief"
    ref="addBeliefCard"
    :initialWidth="600" 
    :initialHeight="450"
    @mousedown="drag"
  >
  <v-container class="pa-3">
    <v-row>
      <v-col md="8">
        <v-btn 
          @click.prevent="pasteDetails"
          :disabled="hasCopyData"
        >
          Paste details
        </v-btn>
      </v-col>
      <v-col md="3"></v-col>
      <v-col md="1">
        <v-icon
          large
          color="red darken-3"
          @click.prevent="close"
        >
          mdi-close
        </v-icon>
      </v-col>
    </v-row>
    <v-form v-model="valid" @submit.prevent="submit">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field 
              v-model="formData.name"
              label="Name"
              placeholder="Enter a short name for this belief"
              :rules="nameRules"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-select
              v-model="formData.type"
              :items="beliefTypes"
              label="Type"
              :placeholder="beliefTypes[2]"
              :rules="typeRules"
              required
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-textarea
            v-model="formData.notes"
            label="Notes"
            solo
          ></v-textarea>
        </v-row>
        <v-row>
          <v-chip-group
            v-model="formData.references"
            label="References"
          ></v-chip-group>
        </v-row>
      </v-container>
      <v-btn type="submit" :disabled="!valid">Submit</v-btn>
    </v-form>
  </v-container>
  </base-widget>
</template>

<script lang="ts">
import Vue from 'vue'
import * as uuid from 'uuid'
import BaseWidget from '~/components/BaseWidget.vue'
import { BeliefReference, BeliefType, Node, NodeData } from '~/belief-map.types'

export default Vue.extend({
  name: 'AddBelief',
  components: {
    BaseWidget
  },
  props: ['parentName'],
  data() {
    return {
      positions: {
        clientX: undefined as any,
        clientY: undefined as any,
        movementX: 0,
        movementY: 0
      },
      formData: {
        name: '' as string,
        notes: '' as string,
        references: [] as BeliefReference[],
        type: '' as string,
      } as any,
      nameRules: [
        (v: any) => !!v || 'You must enter a name',
      ],
      typeRules: [
        (v: any) => !!v || 'You must choose a type',
      ],
      valid: true,
    }
  },
  computed: {
    beliefTypes(): string[] {
      return Object.keys(BeliefType)
    },
    hasCopyData(): boolean {
      const copiedNode = this.$store.state.nodes.copiedNode
      return Object.keys(copiedNode).length > 0
    },
    node(): NodeData {
      function getEnumKeyByEnumValue(someEnum: any, enumValue: any): any {
          let keys = Object.keys(someEnum).filter(x => someEnum[x] == enumValue);
          return keys.length > 0 ? keys[0] : null;
      }
      const type = getEnumKeyByEnumValue(BeliefType, this.formData.type) as BeliefType
      return {
        id: uuid.v4(),
        name: this.formData.name,
        notes: this.formData.notes,
        references: this.formData.references,
        type: type,
        isRoot: false,
      } as NodeData
    }
  },
  methods: {
    drag(event: any) {
      event.preventDefault()
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      document.onmousemove = this.moveCard
      document.onmouseup = this.stopDrag
      console.log('draaaaag')
    },
    moveCard(event: any) {
      event.preventDefault()
      this.positions.movementX = this.positions.clientX - event.clientX
      this.positions.movementY = this.positions.clientY - event.clientY
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY

      (this.$refs.addBeliefCard as any).style.top = `${(
        (this.$refs.addBeliefCard as any).offsetTop - this.positions.movementY
      )}px`;
      (this.$refs.addBeliefCard as any).style.left = `${(
        (this.$refs.addBeliefCard as any).offsetLeft - this.positions.movementX
      )}px`;
      console.log('dragging!')
    },
    stopDrag(event: any) {
      document.onmouseup = null
      document.onmousemove = null
    },
    close() {
      this.$store.commit('display/setDisplayAddBelief', false)
    },
    pasteDetails() {
      const details = this.$store.state.nodes.copiedNode as NodeData
      this.formData = {
        name: details.name,
        notes: details.notes,
        references: details.references,
        type: details.type,
      }
    },
    submit() {
      const selectedNode = this.$store.state.nodes.selectedNode
      this.$store.commit('data/addNode', [this.node, selectedNode.id])
      this.$nuxt.$emit('tree-edited')
    },
  },
})
</script>

<style lang="scss">
  // #add-belief {
  //   top: 25;
  //   left: 2.5vw;
  // }
</style>