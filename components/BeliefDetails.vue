<template>
  <base-widget 
    id="belief-details" 
    ref="beliefDetailsCard"
    :initialWidth="300"
    :initialHeight="450"
    @mousedown="drag"
  >
    <v-container>
      <v-row>
        <v-col md="4">
          <v-btn @click.prevent="displayAddBelief">Add Premise</v-btn>
        </v-col>
        <v-col md="4">
          <v-btn @click.prevent="deleteBelief">Delete Belief</v-btn>
        </v-col>
        <v-col md="2">
          <v-icon
            large
            color="red darken-3"
            @click.prevent="close"
          >
            mdi-close
          </v-icon>
        </v-col>
      </v-row>
      <v-row v-if="hasCopyData">
        <v-col md="4">
          <v-btn @click.prevent="copyDetails" :disabled="hasCopyData">Copy Details</v-btn>
        </v-col>
      </v-row>
      <v-container>
        <v-row>
          <!-- Change to custom icon / image -->
          <h3>{{ node.type }}</h3>
        </v-row>
        <v-row>
          <h4>{{ node.name }}</h4>
        </v-row>
        <v-row v-if="node.notes != ''">
          <p>{{ node.notes }}</p>
        </v-row>
      </v-container>
    </v-container>
  </base-widget>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseWidget from '~/components/BaseWidget.vue'
import { Node } from '~/belief-map.types'

export default Vue.extend({
  name: 'BeliefDetails',
  components: {
    BaseWidget
  },
  data() {
    return {
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
    close() {
      this.$store.commit('display/setDisplayBeliefDetails', false)
    },
    copyDetails() {
      this.$store.commit('nodes/copy', this.node)
      console.log(`Node ${this.node.id} copied`)
    },
    displayAddBelief() {
      this.$store.commit('display/setDisplayAddBelief', true)
    },
    deleteBelief() {
      // TODO Show overlay first to confirm
      this.$store.commit('data/deleteNode', this.node.id)
    },
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
