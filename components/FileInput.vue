<template>
  <v-container align="center">
    <v-row>
      <v-col md="4">
      <v-file-input
        placeholder="Your existing belief map"
        accept=".json"
        @change="processFile"
      ></v-file-input>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "FileInput",
  data() {
    return {
      fileReader: {} as FileReader,
      file: {} as File,
      jsonData: {} as any,
    }
  },
  methods: {
    processFile(file: File) {
      if (file === undefined) {
        console.log('Error processing uploaded file')
        return
      }
      this.file = file
      if (process.browser) {
        this.fileReader = new FileReader()
        const self = this
        this.fileReader.onload = (e: any) => {
          try {
            self.jsonData = JSON.parse(e.target.result)
            self.$store.commit('data/set', [self.jsonData, file.name])
            console.log('Data sent to Vuex store')
          } catch (exception: any) {
            alert('Your file does not appear to contain a valid JSON object')
          }
        }
        this.fileReader.readAsText(this.file)
      } else {
        alert('Your file could not be read at this time')
      }
    }
  },
})
</script>