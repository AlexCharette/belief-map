// import { shallowMount } from '@vue/test-utils'
// import BeliefNode from '@/components/BeliefNode.vue'
// import { BeliefType, Node } from '~/belief-map.types'

// describe('BeliefNode', () => {

//   let propsData = {
//     index: 1,
//     node: { 
//       id: 'abcde',
//       name: 'Foo',
//       notes: '',
//       type: BeliefType.Observation,
//       references: [],
//       children: [],
//       isRoot: false,
//     } as Node,
//     shapeData: {
//       x: 10,
//       y: 10, 
//       size: 30,
//     },
//   }

//   test('is a Vue instance', () => {
//     const wrapper = shallowMount(BeliefNode, { propsData })
//     expect(wrapper.vm).toBeTruthy()
//   })

//   it('creates a segment for each distinct premise type', () => {
//     const children: Node[] = [
//       {
//         id: 'abcdf',
//         name: 'Bar',
//         notes: '',
//         type: BeliefType.Observation,
//         references: [],
//         children: [],
//         isRoot: false,
//       } as Node,
//       {
//         id: 'abcdg',
//         name: 'Baz',
//         notes: '',
//         type: BeliefType.Observation,
//         references: [],
//         children: [],
//         isRoot: false,
//       } as Node,
//       {
//         id: 'abcdh',
//         name: 'Buzz',
//         notes: '',
//         type: BeliefType.ReligiousThinking,
//         references: [],
//         children: [],
//         isRoot: false,
//       } as Node
//     ]
//     propsData.node.children = propsData.node.children.concat(children)
//     const wrapper = shallowMount(BeliefNode, { propsData })
//     expect((wrapper.vm as any).hasChildren).toBeTruthy()
//     expect((wrapper.vm as any).segments.length).toEqual(2)
//   })
// })
