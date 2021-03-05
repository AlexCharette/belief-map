<template>
  <!-- <div class="node">Halloooooooo</div> -->
    <donut-chart 
      :segments="segments" 
      :circleData="circleData"
      @click="onClick"
    ></donut-chart>
</template>

<script lang="ts">
import Vue from 'vue'
import { BeliefType, CircleData, Node, Segment } from '~/belief-map.types'
import DonutChart from '~/components/DonutChart.vue'

interface TypeCount {
  scientificEvidence: number,
  observation: number,
  personalConclusion: number,
  personalAssumption: number,
  religiousThinking: number,
  statedByAuthority: number,
  unableToDisprove: number, 
  hasOwnProperty<T>(this: T, v: any): v is keyof T
}

export default Vue.extend({
  name: 'BeliefNode',
  components: {
    DonutChart,
  },
  props: ['index', 'node', 'children', 'distance', 'bezierData', 'shapeData'],
  data() {
    return {
      id: this.node.data.id,
      name: this.node.data.name,
      notes: this.node.data.notes,
      references: this.node.data.references,
      type: this.node.data.type,
      hasChildren: true,
      numTypes: 0 as number,
      segmentData: [] as Segment[],
    }
  },
  computed: {
    circleData() {
      const x = 80
      const y = 80
      const radius = 60
      return {
        x,
        y,
        radius,
      } as CircleData
    },
    x() {
      return this.distance * this.index + this.distance * 0.5
    },
    segments() {
      const self = this
      let segments = [] as Segment[]
      if (this.hasChildren) {
      const typeCount = this.childrenTypeCount
        Object.entries(typeCount).forEach((entry: [string, any]) => {
          if (entry[1] > 0) {
            // Create a new segment object
            const segment = {
              type: entry[0],
              count: 1,
              colour: self.getTypeColour(entry[0]),
            } as Segment
            segments.push(segment)
          }
        })
      } else {
        const segment = {
          type: this.type,
          count: 1,
          colour: self.getTypeColour(this.type),
        } as Segment
        segments.push(segment)
      }
      return segments
    },
    childrenTypeCount() {
      if (!this.hasChildren) return 0
      let typeCount = {
        scientificEvidence: 0,
        observation: 0,
        personalConclusion: 0,
        personalAssumption: 0,
        religiousThinking: 0,
        statedByAuthority: 0,
        unableToDisprove: 0,
      } as TypeCount
      this.children.forEach((child: Node) => {
        const type = child.data.type
        typeCount[type]++ 
      })
      return typeCount
    },
  },
  methods: {
    copy() {
      // TODO Send data to store
    },
    onClick(event: any) {
      console.log('allo!')
      // TODO Send relevant data to store
    },
    getTypeColour(type: string) {
      switch(type) {
        case BeliefType.ScientificEvidence:
          return 'green darken-3'
        case BeliefType.Observation:
          return 'blue darken-3'
        case BeliefType.PersonalConclusion:
          return 'indigo darken-3'
        case BeliefType.PersonalAssumption:
          return 'deep-purple darken-3'
        case BeliefType.ReligiousThinking:
          return 'amber darken-3'
        case BeliefType.StatedByAuthority:
          return 'orange darken-3'
        case BeliefType.UnableToDisprove:
          return 'red darken-3'
        default: 
          return 'white'
      }
    }
  },
  created() {
    console.log('new node!')
    if (this.children === undefined) {
      console.log('This node has no children')
      this.hasChildren = false
    }
  },
  mounted() {
    this.numTypes = Object.keys(this.childrenTypeCount).length // TODO revise
  }
})
</script>

<style lang="scss" scoped>

</style>