export const state = () => ({
  displayBeliefDetails: false,
})

export const mutations = {
  setDisplayBeliefDetails(state: any, value: boolean) {
    state.displayBeliefDetails = value
  },
}