// import { createLocalVue, shallowMount } from '@vue/test-utils'
// import Vuex from 'vuex'
// import DonutChart from '@/components/DonutChart.vue'
// import { BeliefType, CircleData, Node, Segment } from '~/belief-map.types'

// describe('DonutChart', () => {

//   const propsData = {
//     node: {
//       id: 'abcde',
//       name: 'Foo',
//       notes: '',
//       type: BeliefType.Observation,
//       references: [],
//       children: [],
//       isRoot: false,
//     } as Node,
//     segments: [] as Segment[],
//     typeColour: 'light-green darken-1',
//     circleData: {
//       x: 10,
//       y: 10, 
//       radius: 20,
//     } as CircleData
//   }

//   const localVue = createLocalVue()
//   localVue.use(Vuex)

//   let mutations: any
//   let store: any 
  
//   beforeEach(() => {
//     mutations = {
//       setNode: jest.fn(),
//       setDisplayBeliefDetails: jest.fn(),
//     }

//     store = new Vuex.Store({
//       modules: {
//         nodes: {
//           namespaced: true,
//           mutations: {
//             set: mutations.setNode
//           },
//           state: {},
//         },
//         display: {
//           namespaced: true,
//           mutations: {
//             setDisplayBeliefDetails: mutations.setDisplayBeliefDetails,
//           },
//           state: {},
//         }
//       }
//     })
//   })

//   test('is a Vue instance', () => {
//     const wrapper = shallowMount(DonutChart, { propsData })
//     expect(wrapper.vm).toBeTruthy()
//   })

//   it('renders a circle when it has no segments', () => {
//     const wrapper = shallowMount(DonutChart, { propsData })
//     expect(wrapper.find('circle').exists()).toBeTruthy()
//     expect(wrapper.find('path').exists()).toBeFalsy()
//   })

//   it('renders paths equal to its number of segments', () => {
//     const segment_1 = {
//       type: BeliefType.Observation,
//       count: 1,
//       colour: 'light-blue darken-1',
//     } as Segment
//     const segment_2 = {
//       type: BeliefType.ScientificEvidence,
//       count: 3,
//       colour: 'light-green darken-1',
//     } as Segment
//     propsData.segments.push(segment_1)
//     propsData.segments.push(segment_2)
//     const wrapper = shallowMount(DonutChart, { propsData })
//     expect(wrapper.findAll('path').length).toEqual(2)
//   })

//   it('commits "nodes/set" and "setDisplayBeliefDetails" when clicked', () => {
//     const wrapper = shallowMount(DonutChart, { propsData, store, localVue })
//     wrapper.find('svg').trigger('click')
//     expect(mutations.setNode).toHaveBeenCalled()
//     expect(mutations.setDisplayBeliefDetails).toHaveBeenCalled()
//   })

//   // test('colours are properly mapped from name to hexcode', () => {
//   //   const wrapper = shallowMount(DonutChart, { propsData })
//   //   Object.entries(colourMap).forEach((entry: [string, string]) => {
//   //     expect
//   //   })
//   // })
// })