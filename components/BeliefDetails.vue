<template>
  <base-widget 
    id="belief-details" 
    ref="beliefDetailsCard"
    :overlay="true"
    :initialWidth="300"
    :initialHeight="450"
    @mousedown="drag"
  >
    <v-container>
      <v-row>
        <v-col md="5">
          <v-dialog 
            v-model="addBelief"
            max-width="660px"
          >
            <template v-slot:activator="{ on, attrs }">
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
          <v-btn @click.prevent="copyDetails" :disabled="hasCopyData">Copy Details</v-btn>
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
import { Node } from '~/belief-map.types'

export default Vue.extend({
  name: 'BeliefDetails',
  components: {
    AddBelief,
    BaseWidget
  },
  data() {
    return {
      addBelief: false,
      positions: {
        clientX: undefined as any,
        clientY: undefined as any,
        movementX: 0,
        movementY: 0
      },
    }
  },
  computed: {
    hasCopyData(): boolean {
      const copiedNode = this.$store.state.nodes.copiedNode
      return Object.keys(copiedNode).length > 0
    },
    node(): Node {
      return this.$store.state.nodes.selectedNode as Node
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
      console.log('draggin!')
    },
    stopDrag(event: any) {
      document.onmouseup = null
      document.onmousemove = null
    },
    getFormattedTypeAndIcon(type: string): [string, string, string] {
      switch (type) {
        case 'scientificEvidence':
          return ['Scientific Evidence', 'mdi-beaker', 'light-green darken-1']
        case 'observation':
          return ['Observation', 'mdi-eye', 'light-blue darken-1']
        case 'personalConclusion':
          return ['Personal Conclusion', 'mdi-account-plus', 'indigo darken-1']
        case 'personalAssumption':
          return ['Personal Assumption', 'mdi-account-check', 'deep-purple darken-1']
        case 'religiousThinking':
          return ['Religious Thinking', 'mdi-book-open-page-variant', 'amber darken-1']
        case 'statedByAuthority':
          return ['Stated by Authority', 'mdi-exclamation-thick', 'orange darken-1']
        case 'unableToDisprove':
          return ['Unable to Disprove', 'mdi-help', 'red darken-1']
        default: return ['', '', '']
      }
    },
    copyDetails() {
      this.$store.commit('nodes/copy', this.node)
      console.log(`Node ${this.node.id} copied`)
    },
    deleteBelief() {
      // TODO Show overlay first to confirm
      this.$store.commit('data/deleteNode', [this.node.id, this.node.children])
      this.$nuxt.$emit('tree-edited')
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
