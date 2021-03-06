import { Node } from '~/belief-map.types'

export const state = () => ({
  selectedNode: {} as Node,
  copiedNode: {} as Node,
})

export const mutations = {
  set(state: any, node: Node) {
    state.selectedNode = node
  },
  copy(state: any, node: Node) {
    state.copiedNode = node
  }
}