import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowTavbar: true,
    comingList: [],
  },
  getters:{
    co
  },
  mutations: {
    ShowTavbar(state, data) {
      state.isShowTavbar = data;
    },
    comingListMutation(state, data) {
      state.comingList = data;
    }
  },
  actions: {
    getComingListAction(store) {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4271989",
        headers: {
          "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        console.log(res.data);
        store.commit('comingListMutation', res.data.data.films)
      });
    }
  },
  modules: {}
})