<template>
  <base-widget 
    id="add-belief"
    ref="addBeliefCard"
    :overlay="false"
  >
  <v-container class="pa-3">
    <v-row>
      <v-col md="8">
        <v-btn 
          @click.prevent="pasteDetails"
          :disabled="!hasCopyData"
        >
          Paste details
        </v-btn>
      </v-col>
      <v-col md="3"></v-col>
      <v-col md="1">
        <slot></slot>
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
            solo
          >
            <template v-slot:label>
              <div>
                Notes <small>(optional)</small>
              </div>
            </template>
          </v-textarea>
        </v-row>
        <v-container>
          <v-row v-for="(value, index) in formData.references" :key="index">
            <v-col md="6">
              <v-text-field 
                v-model="formData.references[index].text"
                label="Name"
                placeholder="Enter a short name for this reference"
              ></v-text-field>
            </v-col>
            <v-col md="5">
              <v-text-field 
                v-model="formData.references[index].link"
                label="Link"
                placeholder="Enter a link for this reference"
              ></v-text-field>
            </v-col>
            <v-col md="1">
              <v-btn elevation="2" icon small @click.prevent="subtractReferenceSlot">
               <v-icon>mdi-minus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="d-flex align-center">
            <v-col md="1">
              <v-btn elevation="2" icon small @click.prevent="addReferenceSlot">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
            <v-col md="3" class="d-flex align-center">
              <h5>Add reference</h5>
            </v-col>
          </v-row>
        </v-container>
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
      numReferenceSlots: 0 as number,
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
      const value = this.formData.type[0].toLowerCase() + this.formData.type.slice(1)
      return {
        id: uuid.v4(),
        name: this.formData.name,
        notes: this.formData.notes,
        references: this.formData.references,
        type: value,
        isRoot: false,
      } as NodeData
    }
  },
  methods: {
    addReferenceSlot() {
      this.formData.references.push({
        text: '',
        link: '',
      } as BeliefReference)
    },
    subtractReferenceSlot() {
      this.formData.references.pop()
    },
    close() {
      this.$nuxt.$emit('add-belief-closed')
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
      this.close()
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