<template>
  <div>
    <v-row>
      <v-col md="8">
        <file-input></file-input>
      </v-col>
      <v-col md="2"> 
        <v-btn @click.prevent="saveTree">Save</v-btn>
      </v-col>
      <v-col md="2">
        <v-btn @click.prevent="exportTree">Export</v-btn>
      </v-col>
    </v-row>
    <belief-details v-if="displayBeliefDetails"></belief-details>
    <add-belief v-if="displayAddBelief"></add-belief>
    <h1>So-and-so's Beliefs</h1>
      <d-3-tree :dataSet="beliefData" style="width: 800px; height: 600px;"></d-3-tree>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import download from 'downloadjs'
import AddBelief from '~/components/AddBelief.vue'
import BeliefDetails from '~/components/BeliefDetails.vue'
import D3Tree from '~/components/D3Tree.vue'
import FileInput from '~/components/FileInput.vue'

export default Vue.extend({
  components: { 
    AddBelief, 
    BeliefDetails,
    D3Tree,
    FileInput,
  },
  data() {
    return {
      size: 200 as number,
    }
  },
  computed: {
    beliefData() {
      return this.$store.state.data.tree
    },
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
    saveTree() {
      console.log('saving tree')
      if (process.browser) {
        this.$store.dispatch('data/save')
        alert('Your tree was saved!')
      } else {
        alert('Your tree could not be saved at this time')
      }
    },
    exportTree() {
      const defaultFileName = this.$store.state.data.filename
      const filename = defaultFileName == '' ? 'beliefMap.json' : defaultFileName
      download(JSON.stringify(this.beliefData), filename, 'application/json')
    },
  },
  created() {
    if (process.browser) {  
      if (localStorage.getItem('treeData') && localStorage.getItem('treeData') != 'undefined') {
        const treeString = localStorage.getItem('treeData') as string
        const treeData = JSON.parse(treeString)
        this.$store.commit('data/set', [treeData, ''])
        console.log('Tree data retrieved from local storage')
      }
    }
  },
})
</script>
