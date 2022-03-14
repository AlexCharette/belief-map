import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import BaseWidget from '@/components/BaseWidget.vue'

Vue.use(Vuetify)

describe('BaseWidget', () => {

  const localVue = createLocalVue()

  let vuetify: any

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(BaseWidget, { localVue, vuetify })
    expect(wrapper.vm).toBeTruthy()
  })
})