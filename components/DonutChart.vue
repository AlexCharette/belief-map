<template>
  <svg v-if="(numSegments > 1)">
    <path 
      v-for="(segment, index) in segments" 
      :key="index"
      fill="transparent"
      :stroke="getHexColour(segment.colour)"
      :stroke-width="(strokeWidth + (segment.count * 3))"
      :d="describeArc(circleData.x, circleData.y, circleData.radius, arcPoints[index][0], arcPoints[index][1])"
    ></path>
  </svg>
  <svg v-else>
    <circle 
      fill="transparent"
      :cx="circleData.x"
      :cy="circleData.y"
      :r="circleData.radius"
      :stroke="getHexColour(this.segments[0].colour)"
      :stroke-width="strokeWidth"
    ></circle>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import { CircleData, Segment } from '~/belief-map.types'

export default Vue.extend({
  name: 'DonutChart',
  props: ['segments', 'circleData'],
  data() {
    return {
      numSegments: this.segments.length,
      strokeWidth: 15 as number,
    }
  },
  computed: {
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
    getHexColour(name: string) {
      switch (name) {
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