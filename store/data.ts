
export const state = () => ({
  filename: '',
  tree: {}
})

export const mutations = {
  set(state: any, payload: [{}, string]) {
    state.tree = payload[0]
    state.filename = payload[1]
    console.log(payload[1])
  }
}

export const actions = {
  export(state: any) {
    // TODO handle data exportation
  },
  save(context: any) {
    console.log(JSON.stringify(context.state.tree))
    localStorage.treeData = JSON.stringify(context.state.tree)
  }
}