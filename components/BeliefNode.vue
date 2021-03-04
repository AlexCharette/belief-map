<template>
  <donut-chart :segments="segments" :circleData="circleData"></donut-chart>
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
  props: ['id', 'name', 'notes', 'references', 'type', 'children'],
  data() {
    return {
      numTypes: 0 as number,
      segmentData: [] as Segment[],
      circleData: {
        x: 80 as number,
        y: 80 as number,
        radius: 60 as number,
      } as CircleData,
    }
  },
  computed: {
    segments() {
      const self = this
      const typeCount = this.childrenTypeCount
      let segments = [] as Segment[]

      Object.entries(typeCount).forEach((entry: [string, any]) => {
        if (entry[1] > 0) {
          // Create a new segment object
          const segment = {
            type: entry[0],
            count: entry[1],
            colour: self.getTypeColour(entry[0]),
          } as Segment
          segments.push(segment)
        }
      })
      return segments
    },
    childrenTypeCount() {
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
    getTypeColour(type: string) {
      switch(type) {
        case BeliefType.ScientificEvidence:
          return 'green darken-3'
        case BeliefType.Observation:
          return 'blue darken-3'
        case BeliefType.PersonalConclusion:
          return 'indigo darken-3'
        case BeliefType.PersonalAssumption:
          return 'deep-purple darken 3'
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
  mounted() {
    this.numTypes = Object.keys(this.childrenTypeCount).length // TODO revise
  }
})
</script>

<style lang="scss" scoped>

</style>