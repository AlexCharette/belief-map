import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from '../../store/data'
import { BeliefReference, BeliefType, Coords, getNode, Node, NodeData } from '../../belief-map.types'

const { addDagNode, deleteDagNode, setDag, setDagWithFile } = mutations
let state : any = {}

describe('Store', () => {

  beforeEach(() => {
    const dag = {
      items: [
        {
          data: {          
            id: '027f6d59-c086-4b11-871b-fdd43eaa5c73',
            name: 'Your Beliefs',
            notes: '',
            references: [],
            type: BeliefType.PersonalConclusion,
            isRoot: true,
          },
          parents: []
        },
        {
          data: {        
            id: '03f5f39d-0e54-44e8-85db-7716969a1c50',
            name: 'GOD HATES SNITCHES',
            notes: '',
            type: BeliefType.PersonalAssumption,
            references: [],
            isRoot: false,
          },
          parents: ['027f6d59-c086-4b11-871b-fdd43eaa5c73']
        },
        {
          data: {            
            id: 'f6e8979a-fd58-4ac8-a183-288db6f9013f',
            name: 'The stoics said so',
            notes: 'Whatever',
            references: [],
            type: null,
            isRoot: false,
          },
          parents: ['027f6d59-c086-4b11-871b-fdd43eaa5c73', '03f5f39d-0e54-44e8-85db-7716969a1c50']
        }
      ]
    }

    state = {
      dag,
      filename: '',
    }
  })

  it('sets the DAG from an object', () => {
    const newDag = {
      items: []
    }

    setDag(
      state, 
      newDag,
    )

    expect(state.dag.items.length).toEqual(0)
  })

  it('sets the DAG from a file', () => {
    const newDag = {
      items: []
    }

    setDagWithFile(
      state, 
      [
        newDag,
        'file',
      ]
    )

    expect(state.dag.items.length).toEqual(0)
    expect(state.filename).toEqual('file')
  })

  it('adds a node to the DAG', () => {
    const parentId = '027f6d59-c086-4b11-871b-fdd43eaa5c73'
    const newNode = {
      id: 'abcdefg',
      name: 'Newest Node',
      notes: '',
      type: BeliefType.PersonalConclusion,
      references: [
        {
          text: '',
          link: ''
        } as BeliefReference
      ],
      isRoot: false,
      coords: { x: 0, y: 0 } as Coords
    } as NodeData
    addDagNode(
      state, 
      [
        newNode,
        parentId,
      ],
    )
    expect(state.dag.items.length).toEqual(4)
    expect(state.dag.items[3].parents.includes(parentId)).toBeTruthy()
  })

  it('deletes a node from the DAG', () => {
    const nodeId = '03f5f39d-0e54-44e8-85db-7716969a1c50'
    deleteDagNode(
      state,
      [nodeId],
    )
    const updatedNodes : Node[] = state.dag.items
    const childNode = getNode('f6e8979a-fd58-4ac8-a183-288db6f9013f', updatedNodes)
    expect(state.dag.items.length).toEqual(2)
    expect(childNode.parents.includes(nodeId)).toBeFalsy()
    expect(childNode.parents.length).toEqual(1)
  })
})