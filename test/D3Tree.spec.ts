import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import D3Tree from '@/components/D3Tree.vue'

describe('D3Tree', () => {

  let localVue = createLocalVue()
  let vuetify: any
  let mutations: any
  let store: any
  let options: any

  localVue.use(Vuex)

  beforeEach(() => {
    vuetify = new Vuetify()

    mutations = {
      copyNode: jest.fn(),
      deleteNode: jest.fn(),
      setDisplayBeliefDetails: jest.fn(),
    }

    store = new Vuex.Store({
      modules: {
        data: {
          namespaced: true,
          state: {
            tree: {},
          },
          mutations: {
            deleteNode: mutations.deleteNode,
          }
        },
      }
    })

    options = {
      localVue, 
      store, 
      vuetify, 
    }
  })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(D3Tree, options)
    expect(wrapper.vm).toBeTruthy()
  })
})