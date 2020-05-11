export default {
  state() {
    return {
      isLoading: true,
      summary: '',
      timeline: ''
    }
  },
  mutations: {
    saveSummary(state, data) {
      state.summary = data
    },
    saveTimeline(state, data) {
      state.timeline = data
    },
    startApp(state) {
      state.isLoading = false
    }
  },
  actions: {
    async getAllData({ commit }) {
      await this.$axios
        .$get('https://covid19.patria.org.ve/api/v1/summary', {
          crossdomain: true
        })
        .then((res) => {
          commit('saveSummary', res)
        })
      await this.$axios.$get('/timeline', { crossdomain: true }).then((res) => {
        commit('saveTimeline', res)
        commit('startApp')
      })
    }
  }
}
