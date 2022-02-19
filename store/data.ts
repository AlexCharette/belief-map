import * as uuid from 'uuid'
import { EncryptStorage } from 'encrypt-storage'
import { BeliefType, Node } from "~/belief-map.types"

// TODO define secret key
// const encryptStorage = new EncryptStorage('secret-key')

const newTree = {
  id: uuid.v4(),
  name: 'Your Beliefs',
  notes: '',
  references: [],
  type: BeliefType.PersonalConclusion,
  isRoot: true,
  children: []
}

export const state = () => ({
  filename: '',
  tree: newTree,
  // encryptStorage: encryptStorage
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
    console.log(`Vuex.data.deleteNode() -- Selected node has ${selectedNodeChildren} children`)
    findAndRemoveNode([state.tree], selectedNodeChildren)

    function findAndRemoveNode(children: any[], newChildren: any[]) {
      children.forEach((currentItem: any, index: number) => {
        // If the current item has the selected node as its child,
        if (currentItem.children.some((currentChild: any) => currentChild.id === selectedNodeId)) {
          console.log(`Vuex.data.findAndRemoveNode() -- ${index} -- Found the node`)
          if (selectedNodeChildren.length > 0) { // TODO length is sometimes undefined
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
  set(state: any, payload: {}) {
    state.tree = payload
  },
  setWithFile(state: any, payload: [{}, string]) {
    state.tree = payload[0]
    state.filename = payload[1]
  }
}

export const actions = {
  load(context: any) {
    // const treeDataInStorage = encryptStorage.getItem('treeData')
    // if (treeDataInStorage && treeDataInStorage != 'undefined') {
    //   const treeString = treeDataInStorage as string
    //   const treeData = JSON.parse(treeString)
    //   context.commit('set', treeData)
    // }
  },
  new(context: any) {
    context.commit('set', newTree)
  },
  save(context: any) {
    const treeData = JSON.stringify(context.state.tree)
    console.log(`Vuex.data.save() -- ${treeData}`)
    // context.state.encryptStorage.setItem('treeData', treeData)
    // // localStorage.treeData = treeData
  }
}