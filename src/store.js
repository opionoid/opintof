import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const CoC = {
  namespaced: true,
  state: {
    job: {
      name: "",
      abilities: []
    }
  },
  mutations: {
    apply_job_abilities(state, payload) {
      Object.assign(state.job.abilities, payload)
      console.log("state: " + state.job.abilities)
      console.log("payload: " + payload)
    }
  }
}

export default new Vuex.Store({
  modules: {
    CoC
  },
  plugins: [createPersistedState()]
})
