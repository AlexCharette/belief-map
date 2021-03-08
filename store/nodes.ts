import { Node, NodeData } from '~/belief-map.types'

export const state = () => ({
  selectedNode: {} as Node,
  copiedNode: {} as NodeData,
})

export const mutations = {
  set(state: any, node: Node) {
    state.selectedNode = node
  },
  copy(state: any, node: NodeData) {
    state.copiedNode = node
  }
}