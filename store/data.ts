import { Node, NodeData } from "~/belief-map.types"

export const state = () => ({
  filename: '',
  tree: {}
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
  deleteNode(state: any, id: string) {

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