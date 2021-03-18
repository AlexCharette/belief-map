import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import AppBar from '@/components/AppBar.vue'

Vue.use(Vuetify)

describe('AppBar', () => {

  const localVue = createLocalVue()

  let vuetify: any

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(AppBar, { localVue, vuetify })
    expect(wrapper.vm).toBeTruthy()
  })
})