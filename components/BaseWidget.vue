<template>
  <v-card
    :class="{ overlay: overlay }"
    :min-width="initialWidth"
    :min-height="initialHeight"
    elevation="8"
    shaped
  >
    <slot></slot>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseWidget',
  props: ['initialWidth', 'initialHeight', 'overlay'],
})
</script>

<style lang="scss">
  .overlay {
    position: absolute !important;
    z-index: 60;
  }
</style>
