import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Vue from 'vue'
import Vuetify from 'vuetify'
import BeliefDetails from '@/components/BeliefDetails.vue'
import { BeliefType, Node, NodeData } from '@/belief-map.types'

Vue.use(Vuetify)

describe('BeliefDetails', () => {

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
        nodes: {
          namespaced: true,
          state: {
            selectedNode: {
              id: 'abcde',
              name: 'Foo',
              notes: '',
              type: BeliefType.Observation,
              references: [],
              children: [],
              isRoot: false,
            } as Node,
            copiedNode: {
              id: 'abcde',
              name: 'Foo',
              notes: '',
              type: BeliefType.Observation,
              references: [],
              isRoot: false,
            } as NodeData,
          },
          mutations: {
            copy: mutations.copyNode,
          }
        },
        display: {
          namespaced: true,
          state: {},
          mutations: {
            setDisplayBeliefDetails: mutations.setDisplayBeliefDetails,
          }
        },
        data: {
          namespaced: true,
          state: {},
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
      mocks: {
        $nuxt: {
          $on: jest.fn()
        }
      }, 
    }
  })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(BeliefDetails, options)
    expect(wrapper.vm).toBeTruthy()
  })

  it('allows node details to be copied', () => {
    const wrapper = shallowMount(BeliefDetails, options)
    const instance = wrapper.vm as any
    instance.copyDetails()
    expect(mutations.copyNode).toHaveBeenCalled()
  })

  it('updates the state when its closed', () => {
    const wrapper = shallowMount(BeliefDetails, options)
    const instance = wrapper.vm as any
    instance.close()
    expect(mutations.setDisplayBeliefDetails).toHaveBeenCalled()
  })


  it('notifies the store to delete the selected node', () => {
    const wrapper = shallowMount(BeliefDetails, options)
    const instance = wrapper.vm as any
    instance.deleteBelief()
    expect(mutations.deleteNode).toHaveBeenCalled()
  })
})