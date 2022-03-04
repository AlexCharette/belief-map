import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations } from '../store/data'

describe('Store', () => {

  const localVue = createLocalVue()

  let store: any

  localVue.use(Vuex)
  
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        data: {
          namespaced: true,
          mutations: mutations,
          state: state,
        },
      }
    })
  })

  it('adds a node to the DAG', () => {

  })

  it('removes a node from the DAG', () => {

  })
})