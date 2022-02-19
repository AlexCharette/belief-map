<template>
  <base-widget 
    id="belief-details" 
    ref="beliefDetailsCard"
    :overlay="true"
    :initialWidth="300"
    :initialHeight="450"
  >
    <v-container>
      <v-row>
        <v-col md="5">
          <v-dialog 
            v-model="addBelief"
            max-width="660px"
          >
            <template #activator="{ on, attrs }">
              <v-btn 
                v-on="on"
                v-bind="attrs"
                @click.prevent="addBelief = true">
                Add Premise
              </v-btn>
            </template>
            <add-belief></add-belief>
          </v-dialog>
        </v-col>
        <v-col md="6"></v-col>
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
      <v-container>
        <v-row>
          <!-- Change to custom icon / image -->
          <v-col md="8">
            <h3>{{ getFormattedTypeAndIcon(node.type)[0] }}</h3>
          </v-col>
          <v-col md="3"></v-col>
          <v-col md="1">
            <v-icon 
              :color="getFormattedTypeAndIcon(node.type)[2]"
              large
            >
              {{ getFormattedTypeAndIcon(node.type)[1] }}
            </v-icon>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="12">
            <h4>{{ node.name }}</h4>
          </v-col>
        </v-row>
        <v-row v-if="node.notes != ''">
          <p>{{ node.notes }}</p>
        </v-row>
        <v-spacer v-else></v-spacer>
        <v-container v-if="node.references.length > 0">
          <v-row v-for="(value, index) in node.references" :key="index">
            <a 
              v-if="value.link !== ''" 
              :href="value.link"
              target="_blank"
              rel="noreferrer noopener"
            >{{ value.text }}</a>
            <p v-else>{{ value.text }}</p>
          </v-row>
        </v-container>
        <v-spacer v-else></v-spacer>
      </v-container>
      <v-row v-if="!node.isRoot">
        <v-col md="4">
          <v-btn @click.prevent="copyDetails">Copy Details</v-btn>
        </v-col>
        <v-col md="2"></v-col>
        <v-col md="4">
          <v-btn @click.prevent="deleteBelief">Delete Belief</v-btn>
        </v-col>
        <v-col md="2"></v-col>
      </v-row>
    </v-container>
  </base-widget>
</template>

<script lang="ts">
import Vue from 'vue'
import AddBelief from '~/components/AddBelief.vue'
import BaseWidget from '~/components/BaseWidget.vue'
import { Node, NodeData } from '~/belief-map.types'

// switch (type) {
//   case 'scientificEvidence':
//     return ['Scientific Evidence', 'mdi-beaker', 'light-green darken-1']
//   case 'observation':
//     return ['Observation', 'mdi-eye', 'light-blue darken-1']
//   case 'personalConclusion':
//     return ['Personal Conclusion', 'mdi-account-plus', 'indigo darken-1']
//   case 'personalAssumption':
//     return ['Personal Assumption', 'mdi-account-check', 'deep-purple darken-1']
//   case 'religiousThinking':
//     return ['Religious Thinking', 'mdi-book-open-page-variant', 'amber darken-1']
//   case 'statedByAuthority':
//     return ['Stated by Authority', 'mdi-exclamation-thick', 'orange darken-1']
//   case 'unableToDisprove':
//     return ['Unable to Disprove', 'mdi-help', 'red darken-1']
//   default: return ['', '', '']
// }

const iconDataMap = {
  'scientificEvidence': ['Scientific Evidence', 'mdi-beaker', 'light-green darken-1'],
  'observation': ['Observation', 'mdi-eye', 'light-blue darken-1'],
  'personalConclusion': ['Personal Conclusion', 'mdi-account-plus', 'indigo darken-1'],
  'personalAssumption': ['Personal Assumption', 'mdi-account-check', 'deep-purple darken-1'],
  'religiousThinking': ['Religious Thinking', 'mdi-book-open-page-variant', 'amber darken-1'],
  'statedByAuthority': ['Stated by Authority', 'mdi-exclamation-thick', 'orange darken-1'],
  'unableToDisprove': ['Unable to Disprove', 'mdi-help', 'red darken-1'],
} as any

export default Vue.extend({
  name: 'BeliefDetails',
  components: {
    AddBelief,
    BaseWidget
  },
  data() {
    return {
      addBelief: false,
    }
  },
  computed: {
    node(): Node {
      return this.$store.state.nodes.selectedNode as Node
    }
  },
  methods: {
    getFormattedTypeAndIcon(type: string): [string, string, string] {
      return iconDataMap[type]
    },
    copyDetails() {
      this.$store.commit('nodes/copy', {
        id: this.node.id,
        name: this.node.name,
        notes: this.node.notes,
        type: this.node.type,
        references: this.node.references,
        isRoot: this.node.isRoot,
      } as NodeData)
    },
    deleteBelief() {
      // TODO Show overlay first to confirm
      this.$store.commit('data/deleteNode', [this.node.id, this.node.children])
    },
    close() {
      this.$store.commit('display/setDisplayBeliefDetails', false)
    },
  },
  created() {
    const self = this
    this.$nuxt.$on('add-belief-closed', () => {
      self.addBelief = false
    })
  }
})
</script>

<style lang="scss">
  #belief-details {
    top: 25;
    right: 2.5vw;
    div {
      width: 100%;
    }
  }
</style>
