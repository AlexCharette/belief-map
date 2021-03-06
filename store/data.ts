import { Node } from '~/belief-map.types'

export const state = () => ({
  tree: {}
})

export const mutations = {
  import(state: any, data: {}) {
    // TODO handle data importation
    state.tree = data
  },
  set(state: any, data: {}) {
    state.tree = data
  }
}

export const actions = {
  export(state: any) {
    // TODO handle data exportation
  },
  save(state: any) {
    localStorage.treeData = state.tree
  }
}