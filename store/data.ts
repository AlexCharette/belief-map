import * as uuid from 'uuid'
// import { EncryptStorage } from 'encrypt-storage'
import { 
  addNodeParents, 
  BeliefType, 
  getNodeChildren, 
  getNodeParents,
  Node, 
  NodeData,
  removeNode,
  removeParentFromNodes,
} from "~/belief-map.types"

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

const newDag = {
  items: [
    {
      data: {
        id: uuid.v4(),
        name: 'Your Beliefs',
        notes: '',
        references: [],
        type: BeliefType.PersonalConclusion,
        isRoot: true,
        parents: [],
      },
    }
  ],
}

export const state = () => ({
  filename: '',
  tree: newTree,
  dag: newDag,
  nodes: [],
  // encryptStorage: encryptStorage
})

export const mutations = {
  /** 
   * Adds a node to the DAG
   * @param {any} state The state of the store
   * @param {any[]} payload A list containing:
   * - the data of the node to add
   * - the id of the new node's parent
  */
  addDagNode(state: any, payload: [NodeData, string]) {
    // Should just be able to add the node to the main list
    // and ensure it is marked as having the selected node as a parent
    const newNode = {
      data: payload[0],
      parents: [payload[1]],
    } as Node
    state.dag.items.push(newNode)
  },
  /** 
   * Removes a node from the DAG
   * @param {any} state The state of the store
   * @param {any[]} payload A list containing:
   * - the id of the node to remove
   * - something that can probably be removed
  */
  deleteDagNode(state: any, payload: [string]) {
    const children = getNodeChildren(payload[0], state.dag.items)
    // Ensure its parents are assigned to each of its children
    // This means its parents must be added while its own ID is removed from all of its children
    const parents = getNodeParents(payload[0], state.dag.items)
    addNodeParents(parents, children)
    removeParentFromNodes(payload[0], children)
    state.dag.items = removeNode(payload[0], state.dag.items)
  },
  setDag(state: any, payload: {}) {
    state.dag = payload
  },
  setDagWithFile(state: any, payload: [{}, string]) {
    state.dag = payload[0]
    state.filename = payload[1]
  },

  // ---------------------------------------------- OLD ---------------------------------------------- \\
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