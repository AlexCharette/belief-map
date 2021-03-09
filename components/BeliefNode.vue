<template>

    <div
      @mouseenter="isInflated = true"
      @mouseleave="isInflated = false"
    >
      <donut-chart 
        :node="fullNode"
        :segments="segments"
        :typeColour="getTypeColour(this.type)" 
        :circleData="circleData"
      ></donut-chart>
    </div>
    <!-- <p 
    @click="onClick"
    :style="{
      position: 'absolute',
      textAlign: 'center',
      minWidth: '75px',
      top: shapeData.y + 'px',
      left: shapeData.x + 'px',
    }"
    >hi there</p> -->

</template>

<script lang="ts">
import Vue from 'vue'
import { BeliefType, CircleData, Node, Segment } from '~/belief-map.types'
import DonutChart from '~/components/DonutChart.vue'

interface IObjectKeys {
  [key: string]: number,
}

interface TypeCount extends IObjectKeys {
  scientificEvidence: number,
  observation: number,
  personalConclusion: number,
  personalAssumption: number,
  religiousThinking: number,
  statedByAuthority: number,
  unableToDisprove: number, 
}

export default Vue.extend({
  name: 'BeliefNode',
  components: {
    DonutChart,
  },
  props: ['index', 'node', 'distance', 'bezierData', 'shapeData'],
  data() {
    return {
      id: this.node.id,
      name: this.node.name,
      notes: this.node.notes,
      references: this.node.references,
      type: this.node.type,
      numTypes: 0 as number,
      segmentData: [] as Segment[],
      isInflated: false,
    }
  },
  computed: {
    fullNode(): Node {
      return {
        id: this.node.id,
        name: this.node.name,
        notes: this.node.notes,
        references: this.node.references,
        type: this.node.type,
        children: this.hasChildren ? this.node.children : [],
      } as Node
    },  
    hasChildren(): boolean {
      return this.node.children !== undefined && this.node.children.length > 0
    },
    circleData(): CircleData {
      const x = this.shapeData.x
      const y = this.shapeData.y
      const radius = this.isInflated ? this.shapeData.size / 2 : this.shapeData.size / 3
      return {
        x,
        y,
        radius,
      } as CircleData
    },
    // x() {
    //   return this.distance * this.index + this.distance * 0.5
    // },
    segments(): Segment[] {
      const self = this
      let segments = [] as Segment[]
      if (this.hasChildren) {
        console.log(this.node.children)
        const typeCount = this.childrenTypeCount
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
      }
      // } else {
      //   const segment = {
      //     type: this.type,
      //     count: 1,
      //     colour: self.getTypeColour(this.type),
      //   } as Segment
      //   segments.push(segment)
      // }
      return segments
    },
    childrenTypeCount(): any {
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
      this.node.children.forEach((child: any) => {
        const type = child.type as string
        typeCount[type]++ 
      })
      return typeCount
    },
  },
  methods: {
    onClick(event: any) {
      this.$store.commit('nodes/set', this.node)
      if (!this.$store.state.displayBeliefDetails) {
        this.$store.commit('display/toggleDisplayBeliefDetails')
      }
    },
    getTypeColour(type: string) {
      switch(type) {
        case BeliefType.ScientificEvidence:
          return 'light-green darken-1'
        case BeliefType.Observation:
          return 'light-blue darken-1'
        case BeliefType.PersonalConclusion:
          return 'indigo darken-1'
        case BeliefType.PersonalAssumption:
          return 'deep-purple darken-1'
        case BeliefType.ReligiousThinking:
          return 'amber darken-1'
        case BeliefType.StatedByAuthority:
          return 'orange darken-1'
        case BeliefType.UnableToDisprove:
          return 'red darken-1'
        default: 
          return 'white'
      }
    }
  },
  // created() {
  //   if (this.children === undefined) {
  //     this.hasChildren = false
  //   }
  // },
  mounted() {
    console.log(this.node)
    this.numTypes = Object.keys(this.childrenTypeCount).length // TODO revise
  }
})
</script>

<style lang="scss" scoped>

</style>