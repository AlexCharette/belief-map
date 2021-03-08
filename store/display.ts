export const state = () => ({
  displayAddBelief: false,
  displayBeliefDetails: false,
})

export const mutations = {
  setDisplayAddBelief(state: any, value: boolean) {
    state.displayAddBelief = value
  },
  setDisplayBeliefDetails(state: any, value: boolean) {
    state.displayBeliefDetails = value
  },
}