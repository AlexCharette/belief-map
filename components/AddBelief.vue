<template>
  <base-widget>
    <v-form v-model="valid" @submit.prevent="submit">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field 
              v-model="formData.name"
              label="Name"
              placeholder="Enter a short name for this belief"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-select
              v-model="type"
              label="Type"
              required
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-textarea
            v-model="notes"
            label="Notes"
            solo
          ></v-textarea>
        </v-row>
        <v-row>
          <v-chip-group
            v-model="references"
            label="References"
          ></v-chip-group>
        </v-row>
      </v-container>
    </v-form>
  </base-widget>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseWidget from '~/components/BaseWidget.vue'

export default Vue.extend({
  name: 'AddBelief',
  components: {
    BaseWidget
  },
  props: ['parentName'],
  data: () => {
    return {
      formData: {
        name: '' as String,
        notes: '' as String,
        references: [] as Array<String>,
        type: null as unknown,
      },
      valid: false,
    }
  },
  methods: {
    submit() {

    },
  },
})
</script>

<style lang="scss" scoped>

</style>