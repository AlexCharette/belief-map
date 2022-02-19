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
      <v-col md="3">
        Adding a premise to "{{ selectedNode.name }}"
      </v-col>
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
    <v-form ref="form" v-model="valid" @submit.prevent="submit">
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
            <template #label>
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

const formattedTypeNames = {
  'scientificEvidence': 'Scientific Evidence',
  'observation': 'Observation',
  'personalConclusion': 'Personal Conclusion',
  'personalAssumption': 'Personal Assumption',
  'religiousThinking': 'Religious Thinking',
  'statedByAuthority': 'Stated by Authority',
  'unableToDisprove': 'Unable to Disprove',
} as any

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
      selectedNode: {} as Node,
      valid: true,
    }
  },
  computed: {
    beliefTypes(): string[] {
      // TODO filter this based on what type the selected node is
      // TODO this is not super efficient.. might be worth revising data types
      // let beliefTypes: any = Object.keys(BeliefType).map((beliefType: string) => {
      //   for (let i = 1; i < beliefType.length; i++) {
      //     if (beliefType.charAt(i) == beliefType.charAt(i).toUpperCase()) {
      //       // TODO insert space just before it
      //       return [beliefType.slice(0, i - 1), beliefType.slice(i)].join(' ');
      //     }
      //   }
      // })

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
        children: [],
      } as NodeData
    }
  },
  mounted() {
    this.selectedNode = this.$store.state.nodes.selectedNode
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
      this.selectedNode = this.$store.state.nodes.selectedNode
      const form : any = this.$refs.form
      this.$store.commit('data/addNode', [this.node, this.selectedNode.id])
      form.reset()
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