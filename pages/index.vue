<template>
  <v-app class="scrollX">
    <app-bar>
      <template #file-input>
        <file-input></file-input>
      </template>
      <template #new-btn>
        <v-btn @click.prevent="newTree">New</v-btn>
      </template>
      <template #save-btn>
        <v-btn @click.prevent="saveTree" :disabled="!canSave">Save</v-btn>
      </template>
      <template #export-btn>
        <v-btn @click.prevent="exportTree">Export</v-btn>
      </template>
    </app-bar>
        <app-background></app-background>
        <v-main>
          <v-container>
            <belief-details 
              v-if="displayBeliefDetails" 
              :node="selectedNode"
            ></belief-details>
              <the-vertical-d-3-tree style="width: 100vw; height: 100vh;"></the-vertical-d-3-tree>
            <v-snackbar
              v-model="showSnackbar"
              :timeout="snackbarTimeout"
            >
            {{ snackbarMessage }}
            </v-snackbar>
        </v-container>
      </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import download from 'downloadjs'
import AddBelief from '~/components/AddBelief.vue'
import AppBar from '~/components/AppBar.vue'
import BeliefDetails from '~/components/BeliefDetails.vue'
import TheVerticalD3Tree from '~/components/TheVerticalD3Tree.vue'
import FileInput from '~/components/FileInput.vue'
import AppBackground from '~/components/AppBackground.vue'

export default Vue.extend({
  components: {
    AppBackground, 
    AppBar,
    AddBelief, 
    BeliefDetails,
    TheVerticalD3Tree,
    FileInput,
  },
  data() {
    return {
      size: 200 as number,
      showSnackbar: false as boolean,
      snackbarMessage: '' as string,
      snackbarTimeout: 1500 as number,
    }
  },
  computed: {
    // beliefData(): any {
    //   return this.$store.state.data.tree
    // },
    canSave(): boolean {
      return (!!process.browser)
    },
    displayBeliefDetails(): boolean {
      return this.$store.state.display.displayBeliefDetails
    },
    displayAddBelief(): boolean {
      return this.$store.state.display.displayAddBelief
    },
    selectedNode(): Node {
      return this.$store.state.nodes.selectedNode
    }
    // viewbox() {
    //   return `0 0 ${this.size} ${this.size}`
    // },
  },
  methods: {
    newTree() {
      // TODO open confirmation modal
      this.$store.dispatch('data/new')
    },
    saveTree() {
      if (process.browser) {
        this.$store.dispatch('data/save')
        this.snackbarMessage = 'Your tree was successfully saved!'
        this.showSnackbar = true
      } else {
        alert('Your tree could not be saved at this time')
      }
    },
    exportTree() {
      const defaultFileName = this.$store.state.data.filename
      const filename = defaultFileName == '' ? 'beliefMap.json' : defaultFileName
      download(JSON.stringify(this.$store.state.data.tree), filename, 'application/json')
    },
  },
  created() {
    if (process.browser) {  
      this.$store.dispatch('data/load')
    }
  },
})
</script>

<style lang="scss">
  .scrollX { 
    overflow-x: scroll; 
  }
</style>
