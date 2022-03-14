import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import FileInput from '@/components/FileInput.vue'

Vue.use(Vuetify)
window.alert = jest.fn()
describe('FileInput', () => {

  const localVue = createLocalVue()

  let vuetify: any
  let mutations: any
  let store: any 
  let isOnBrowser: boolean

  localVue.use(Vuex)
  
  beforeEach(() => {
    isOnBrowser = true
    process.browser = isOnBrowser

    vuetify = new Vuetify()

    mutations = {
      setData: jest.fn(),
    }

    store = new Vuex.Store({
      modules: {
        data: {
          namespaced: true,
          mutations: {
            set: mutations.setData
          },
          state: {},
        },
      }
    })
  })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(FileInput, { localVue, vuetify })
    expect(wrapper.vm).toBeTruthy()
  })

  it('reads an inputted json file', () => {
    const wrapper = shallowMount(FileInput, { localVue, store, vuetify })
    const instance = wrapper.vm as any

    const fileReaderSpy = jest.spyOn(FileReader.prototype, 'readAsText').mockImplementation(() => null)
    const file = {
      name: 'beliefMap.json',
      type: 'application/json',
    } as File

    instance.processFile(file)

    // expect(mutations.setData).toHaveBeenCalled()
    expect(fileReaderSpy).toHaveBeenCalledWith(file)
  })
})