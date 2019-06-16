import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const CoC = {
  namespaced: true,
  state: {
    currentJobName: "",
    currentJobAbilities: []
  },
  mutations: {
    apply_job(state, payload) {
      Object.assign(state.currentJobName, payload.name)
      Object.assign(state.currentJobAbilities, payload.abilities)
    }
  }
}

export default new Vuex.Store({
  modules: {
    CoC
  },
  plugins: [createPersistedState()]
})
