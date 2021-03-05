<template>
  <div>
    <h1>So-and-so's Beliefs</h1>
      <d-3-tree :dataSet="beliefData"></d-3-tree>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import D3Tree from '~/components/D3Tree.vue'
import jsonData from '~/assets/data/belief_map.json'

export default Vue.extend({
  components: { 
    D3Tree,
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
  },
})
</script>
