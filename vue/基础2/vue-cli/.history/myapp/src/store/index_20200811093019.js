import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowTavbar: true,
  },
  mutations: {
    ShowTavbar(state, data) {
      state.isShowTavbar = data;
    }
  },
  actions: {},
  modules: {}
})