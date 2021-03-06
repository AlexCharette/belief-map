export const state = () => ({
  counter: 0 as number
})

export const mutations = {
  increment(state: any) {
    state.counter++
  }
}