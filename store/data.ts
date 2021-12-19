import * as uuid from 'uuid'
import { BeliefType, Node } from "~/belief-map.types"

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
    if (payload[1] === state.tree.id) { // If the selected node is the root,
      state.tree.children.push(payload[0]) // Add the new node directly
    } else {
      findSelectedNode(state.tree.children)
    }

    function findSelectedNode(children: any[]) {
      children.some((currentItem: any, index: number) => {
        console.log(`Vuex.data.findSelectedNode() -- ${index} -- Looking for the node`);
        (currentItem.id === payload[1]) ? currentItem.children.push(payload[0]) : findSelectedNode(currentItem.children)
      })
    }
  },
  deleteNode(state: any, payload: [string, any[]]) {
    const selectedNodeId = payload[0]
    const selectedNodeChildren = payload[1]
    
    findAndRemoveNode([state.tree], selectedNodeChildren)

    function findAndRemoveNode(children: any[], newChildren: any[]) {
      children.forEach((currentItem: any, index: number) => {
        // If the current item has the selected node as its child,
        if (currentItem.children.some((currentChild: any) => currentChild.id === selectedNodeId)) {
          console.log(`Vuex.data.findAndRemoveNode() -- ${index} -- Found the node`)
          if (selectedNodeChildren.length > 1) { // TODO length is sometimes undefined
            // Absorb the selected node's children
            currentItem.children = currentItem.children.concat(selectedNodeChildren)
          }
          // Remove the selected node
          currentItem.children = currentItem.children.filter((child: any) => child.id != selectedNodeId)
          return
        } else {
          console.log(`Vuex.data.findAndRemoveNode() -- ${index} -- Still looking`)
          if (currentItem.children && currentItem.children.length > 0)
            findAndRemoveNode(currentItem.children, newChildren)
        }    
      })
    }
    console.log('Vuex.data.findAndRemoveNode() -- Node removed')
  },
  // TODO evaluate usefulness
  addUniqueKey(state: any) {
    const queue = [state.tree[0]]
      while (queue.length !== 0) {
        const node = queue.pop()
        if (node === undefined) {
          console.log('Vuex.data.addUniqueKey() -- Node is undefined')
          return
        }
        node.id = uuid.v4()
        if (node.children) {
          queue.push(...node.children)
        }
      }
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