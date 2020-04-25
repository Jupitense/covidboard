export default {
  state() {
    return {
      isLoading: true,
      data: ''
    }
  },
  mutations: {
    saveAllData(state, data) {
      state.data = data
    },
    startApp(state) {
      state.isLoading = false
    },
    setCasesByState(state, data) {
      state.casesByState = data
    }
  },
  actions: {
    async getAllData({ commit }) {
      await this.$axios.$get('/api', { crossdomain: true }).then((result) => {
        commit('saveAllData', result)
        commit('startApp')
      })
    }
  }
}
