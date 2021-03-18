<template>
  <v-app-bar
    app
    fixed
  >
    <v-toolbar-title>Your Belief Map</v-toolbar-title>
    <v-spacer></v-spacer>
    <slot name="file-input"></slot>
    <v-spacer></v-spacer>
    <slot name="save-btn" align="center"></slot>
    <v-spacer></v-spacer>
    <slot name="export-btn" align="center"></slot>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppBar',
})
</script>