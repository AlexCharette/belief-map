<template>
  <svg 
    v-if="(hasSegments && numSegments > 1)" 
    @click="onClick"
  >
    <defs>
      <filter :id="`${node.id}-path-shadow`" x="0" y="0" width="200%" height="200%">
        <feOffset result="offOut" in="SourceGraphic" dx="10" dy="10" />
        <feColorMatrix result="matrixOut" in="offOut" type="matrix"
        values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0" />
        <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>
    </defs>
    <circle 
      class="clickable"
      fill="white"
      :cx="circleData.x"
      :cy="circleData.y"
      :r="circleData.radius"
      :stroke="getHexColour(this.segments[0].colour)"
      :stroke-width="1"
      :filter="`url(#${node.id}-path-shadow)`"
    ></circle>
    <circle 
      class="clickable"
      fill="white"
      :cx="circleData.x"
      :cy="circleData.y"
      :r="circleData.radius / 3"
      :stroke="getHexColour(this.typeColour)"
      :stroke-width="2"
    ></circle>
    <path 
      v-for="(segment, index) in segments" 
      :key="index"
      fill="white"
      :stroke="getHexColour(segment.colour)"
      :stroke-width="(strokeWidth + (segment.count * 3))"
      :d="describeArc(circleData.x, circleData.y, circleData.radius, arcPoints[index][0], arcPoints[index][1])"
    ></path>
  </svg>
  <svg v-else-if="(hasSegments && numSegments == 1)">
    <defs>
      <filter :id="`${node.id}-shadow`" x="-35%" y="-35%" width="200%" height="200%">
        <feOffset result="offOut" in="SourceGraphic" dx="5" dy="7" />
        <feColorMatrix result="matrixOut" in="offOut" type="matrix"
        values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.5 0" />
        <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>
    </defs>
    <circle 
      class="clickable"
      fill="white"
      :cx="circleData.x"
      :cy="circleData.y"
      :r="circleData.radius / 3"
      :stroke="getHexColour(this.typeColour)"
      :stroke-width="2"
    ></circle>
    <circle 
      class="clickable"
      fill="white"
      :cx="circleData.x"
      :cy="circleData.y"
      :r="circleData.radius"
      :stroke="getHexColour(this.segments[0].colour)"
      :stroke-width="strokeWidth"
      :filter="`url(#${node.id}-shadow)`"
    ></circle>
  </svg>
  <svg v-else @click="onClick">
    <defs>
      <filter :id="`${node.id}-shadow`" x="-35%" y="-35%" width="200%" height="200%">
        <feOffset result="offOut" in="SourceGraphic" dx="5" dy="7" />
        <feColorMatrix result="matrixOut" in="offOut" type="matrix"
        values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.5 0" />
        <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>
    </defs>
    <circle 
      class="clickable"
      fill="white"
      :cx="circleData.x"
      :cy="circleData.y"
      :r="circleData.radius"
      :stroke="getHexColour(this.typeColour)"
      :stroke-width="strokeWidth"
      :filter="`url(#${node.id}-shadow)`"
    ></circle>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import { CircleData, Segment } from '~/belief-map.types'

export default Vue.extend({
  name: 'DonutChart',
  props: ['node', 'segments', 'typeColour', 'circleData'],
  data() {
    return {
      numSegments: this.segments.length,
      strokeWidth: 15 as number,
    }
  },
  computed: {
    hasSegments(): boolean {
      return this.segments !== undefined && this.segments.length > 0
    },
    svgSize() {
      const circleData = this.circleData as CircleData
      return circleData.x * 2
    },
    arcSize() {
      const size = 360 / this.segments.length
      return size
    },
    arcPoints() {
      let arcs = [] as [number, number][];
      for (let i = 0; i < this.segments.length; i++) {
        const start = i * this.arcSize
        arcs.push([start, start + this.arcSize])
      }
      return arcs
    }
  },
  methods: {
    onClick(event: any) {
      this.$store.commit('nodes/set', this.node)
      this.$store.commit('display/setDisplayBeliefDetails', true)
    },
    getHexColour(name: string) {
      switch (name) {
        case 'light-green darken-1':
          return '#7CB342'
        case 'green darken-1':
          return '#43A047'
        case 'light-blue darken-1':
          return '#039BE5'
        case 'blue darken-1': 
          return '#1E88E5'
        case 'indigo darken-1': 
          return '#3949AB'
        case 'deep-purple darken-1': 
          return '#5E35B1'
        case 'amber darken-1': 
          return '#FFB300'
        case 'orange darken-1': 
          return '##FB8C00'
        case 'red darken-1': 
          return '#E53935'
        case 'light-green darken-3':
          return '#558B2F'
        case 'green darken-3':
          return '#2E7D32'
        case 'blue darken-3': 
          return '#2979FF'
        case 'indigo darken-3': 
          return '#283593'
        case 'deep-purple darken-3': 
          return '#4527A0'
        case 'amber darken-3': 
          return '#FF8F00'
        case 'orange darken-3': 
          return '#EF6C00'
        case 'red darken-3': 
          return '#C62828'
        default:
          return '#FFFFFF'
      }
    },
    // CODE TAKEN FROM https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
    describeArc(x: number , y: number , radius: number , startAngle: number , endAngle: number) {
      const start = this.polarToCartesian(x, y, radius, endAngle);
      const end = this.polarToCartesian(x, y, radius, startAngle);

      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

      const d = [
          "M", start.x, start.y, 
          "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(" ");

      return d;       
    },
    polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
      const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

      return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
      };
    },
    // END OF TAKEN CODE
  },
})
</script>

<style lang="scss">
  .clickable:hover {
    cursor: pointer;
  }
</style>