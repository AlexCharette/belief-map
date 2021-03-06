export const state = () => ({
  displayAddBelief: false,
  displayBeliefDetails: false,
})

export const mutations = {
  toggleDisplayAddBelief(state: any) {
    state.displayAddBelief = !state.displayAddBelief
  },
  toggleDisplayBeliefDetails(state: any) {
    state.displayBeliefDetails = !state.displayBeliefDetails
  },
}