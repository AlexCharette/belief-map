<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <dashboard></dashboard>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Dashboard from '~/components/Dashboard.vue'

export default {
  components: {
    Dashboard,
  },
}
</script>
