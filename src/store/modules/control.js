export default {
  state: {
    userId: null,
    message: null,
    clickButton: null
  },
  mutations: {
    getUserId (state, userId) {
      state.userId = userId
    },
    notification (state, message) {
      state.message = message
    },
    clickButton (state, value) {
      state.clickButton = value
    },
    nullUserId (state, value) {
      state.userId = null
    },
    nullState (state) {
      state.userId = null
      state.clickButton = null
      state.message = null
    }
  }
}
