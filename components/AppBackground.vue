<template>
  <div id="app-background">
    <svg 
      :viewBox="viewBoxAttrs"
      width="100%" height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <icon-rounded-square 
        v-for="n in numSquares" 
        :key="n"
        :name="`rect_${n}`"
        :position="{ 
          x: ((75 * n) / Math.random()), 
          y: (((windowDimensions.height / 10) * n) / Math.random())
        }"
        :size="50"
        :opacity="0.6"
        :colour="'#FFF'"
      ></icon-rounded-square>
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconRoundedSquare from '~/components/IconRoundedSquare.vue'

export default Vue.extend({
  name: 'AppBackground',
  components: {
    IconRoundedSquare
  },
  data() {
    return {
      numSquares: 7,
    }
  },
  computed: {
    windowDimensions(): any {
      return process.browser ? {
        width: (window as any).innerWidth,
        height: (window as any).innerHeight,
      } : {
        width: 1000,
        height: 800,
      }
    },
    viewBoxAttrs(): string {
      return process.browser ?
        `0 0 ${(window as any).innerWidth} ${(window as any).innerHeight}` :
        '0 0 1000 800'
    },
  }
})
</script>

<style lang="scss" scoped>
    #app-background {
        position: fixed;
        top: 0;
        right: 0;
        width: 200%;
        height: 200%;
        z-index: 0;
        pointer-events: none;
    }
</style>
