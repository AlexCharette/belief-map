<template>
  <g :ref="name">
    <rect 
      :x="position.x" 
      :y="position.y"  
      :width="rectSize" 
      :height="rectSize"
      :opacity="opacity"
      :style="styles"
    ></rect>
  </g>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IconRoundedSquare',
  props: ['name', 'position', 'size', 'opacity', 'colour'],
  computed: {
    rectSize(): number {
      const minSize = 50,
            maxSize = 250,
            randomSize = this.size / Math.random()
      return this.getFramedValue(minSize, maxSize, randomSize)
    },
    rectRotation(): number {
      const minRotation = 35,
            maxRotation = 65,
            randomRotation = 100 * Math.random()
      return this.getFramedValue(minRotation, maxRotation, randomRotation)
    },
    rectDepth(): number {
      return (999 / Math.random())
    },
    styles(): any {
      return {
        fill: this.colour,
        transformOrigin: 'center',
        transform: 'rotate(' + this.rectRotation + 'deg)',
        zIndex: 999
      }
    }
  },
  methods: {
    getFramedValue(min: number, max: number, val: number): number {
      if (val < min) return min
      else if (val > max) return max
      else return val
    }
  },
  mounted() {
      // const travel = this.$anime({

      // })
  }
})
</script>

<style lang="scss" scoped>
</style>

