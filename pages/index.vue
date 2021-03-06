<template>
  <div>
    <belief-details v-if="displayBeliefDetails"></belief-details>
    <add-belief v-if="displayAddBelief"></add-belief>
    <h1>So-and-so's Beliefs</h1>
      <d-3-tree :dataSet="beliefData" style="width: 800px; height: 600px;"></d-3-tree>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import jsonData from '~/assets/data/belief_map.json'
import AddBelief from '~/components/AddBelief.vue'
import BeliefDetails from '~/components/BeliefDetails.vue'
import D3Tree from '~/components/D3Tree.vue'

export default Vue.extend({
  components: { 
    AddBelief, 
    BeliefDetails,
    D3Tree,
  },
  data() {
    return {
      size: 200 as number,
      beliefData: null as any,
    }
  },
  computed: {
    displayBeliefDetails() {
      return this.$store.state.displayBeliefDetails
    },
    displayAddBelief() {
      return this.$store.state.displayAddBelief
    },
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
    if (process.browser) {
      console.log('we can access local storage!')
      // if (localStorage.getItem('treeData')) {
      //   this.beliefData = localStorage.getItem('treeData')
      // }
      this.beliefData = jsonData
      return
    }
    this.beliefData = jsonData
    // this.beliefData = this.$store.state.data.tree // TODO uncomment this
  },
})
</script>
