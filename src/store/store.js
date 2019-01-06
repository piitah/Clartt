import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  // plugins: [createPersistedState()],
  state: {
    dialog3: false,
    has_no_Transaction: true,
    show_details: true,
    token: null,
    data: null,
    userLoggedIn: true
  },
  mutations: {
    toggle_transDetails(state) {
      return state.dialog3 = !state.dialog3
    },
    check_if_trans_exist(state) {
      return state.has_no_Transaction = !state.has_no_Transaction
    },
    setToken(state, token) {
      state.token = token
      if (token) {
        state.userLoggedIn = true
      } else {
        state.userLoggedIn = false
      }
    },
    setData(state, data) {
      state.data = data
      if (data) {
        state.userLoggedIn = true
      } else {
        state.userLoggedIn = false
      }
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token)
    },
    setUser({ commit }, data) {
      commit('setData', data)
    }
  }
})
