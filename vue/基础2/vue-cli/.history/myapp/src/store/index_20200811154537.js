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
    getComingListAction(state, data) {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4271989",
        headers: {
          "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        console.log(res.data);
        data.datalist = res.data.data.films;
      });
    }
  },
  modules: {}
})