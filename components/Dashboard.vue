<template>
  <main>
    <h1>{{ beliefData.name }}</h1>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200">
      <belief-tree :node="beliefData"></belief-tree>
    </svg>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import BeliefTree from '~/components/BeliefTree.vue'
import jsonData from '~/assets/data/belief_map.json'

export default Vue.extend({
  name: 'Dashboard',
  components: { 
    BeliefTree,
  },
  data() {
    return {
      size: 200 as number,
      beliefData: null as any,
    }
  },
  computed: {
    // viewbox() {
    //   return `0 0 ${this.size} ${this.size}`
    // },
  },
  methods: {
    importTree() {
      // TODO Accept JSON file
    },
    saveTree() {
      // TODO Save tree object to local storage
    },
    exportTree() {
      // TODO Allow user to download JSON file
    },
  },
  created() {
    this.beliefData = jsonData
    console.log('Belief Data inbound')
    console.log(this.beliefData)
  },
})
</script>