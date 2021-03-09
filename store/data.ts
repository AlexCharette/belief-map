import * as uuid from 'uuid'
import { BeliefType, Node, NodeData } from "~/belief-map.types"

export const state = () => ({
  filename: '',
  tree: {
    id: uuid.v4(),
    name: 'Your Beliefs',
    notes: '',
    references: [],
    type: BeliefType.PersonalConclusion,
    isRoot: true,
    children: []
  }
})

export const mutations = {
  addNode(state: any, payload: [Node, string]) {
    if (payload[1] === state.tree.id) {
      state.tree.children.push(payload[0])
    } else {
      findSelectedNode(state.tree.children)
    }
    
  
    function findSelectedNode(children: any[]) {
      children.some((currentItem) => {
        currentItem.id === payload[1] ? currentItem.children.push(payload[0]) : findSelectedNode(currentItem.children)
      })
    }
  },
  deleteNode(state: any, payload: [string, []]) {
    const selectedNodeId = payload[0]
    const selectedNodeChildren = payload[1]
    
    findAndRemoveNode([state.tree], selectedNodeChildren)
    
    function findAndRemoveNode(children: any[], newChildren: any[]) {
      children.forEach((currentItem: any) => {
        // If the current item has the selected node as its child,
        if (currentItem.children.some((currentChild: any) => currentChild.id === selectedNodeId)) {
          console.log('found the node')
          if (selectedNodeChildren.length > 1) { // TODO length is sometimes undefined
            // Absorb the selected node's children
            currentItem.children = currentItem.children.concat(selectedNodeChildren)
          }
          // Remove the selected node
          currentItem.children = currentItem.children.filter((child: any) => child.id != selectedNodeId)
          return
        } else {
          console.log('not yet')
          if (currentItem.children && currentItem.children.length > 0)
            findAndRemoveNode(currentItem.children, newChildren)
        }    
      })
    }
    console.log('Belief removed')
  },
  set(state: any, payload: [{}, string]) {
    state.tree = payload[0]
    state.filename = payload[1]
  }
}

export const actions = {
  save(context: any) {
    console.log(JSON.stringify(context.state.tree))
    localStorage.treeData = JSON.stringify(context.state.tree)
  }
}