import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowTavbar: true,
    datalist: [],
  },
  mutations: {
    ShowTavbar(state, data) {
      state.isShowTavbar = data;
    }
  },
  actions: {
    getComingListAction() {}
  },
  modules: {}
})