import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const CoC = {
  namespaced: true,
  state: {
    currentJobName: "",
    currentJobAbilities: [],
    slackURL: ""
  },
  mutations: {
    apply_job(state, payload) {
      state.currentJobName = payload.name
      Object.assign(state.currentJobAbilities, payload.abilities)
    }, 
    apply_slackURL(state, payload) {
      state.slackURL = payload
    }
  }
}

export default new Vuex.Store({
  modules: {
    CoC
  },
  plugins: [createPersistedState()]
})
