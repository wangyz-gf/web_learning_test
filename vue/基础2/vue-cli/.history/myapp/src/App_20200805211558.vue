<template>
  <div>
    hello vue
    <input type="text" ref="mytext" />
    <button @click="handleClick">点击</button>
    <button @click="getData()">获取数据</button>
    <ul>
      <li v-for="data in datalist">{{ data }}</li>
    </ul>
    <Navbar>
      <button @click="showfun()">navClick</button>
    </Navbar>
    <Sidebar v-show="isShow"></Sidebar>
  </div>
</template>

<script>
import Vue from "vue";
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
// 导入axios模块
// 导入组件
import axios from "axios";
/*   Vue.component("Sidebar", Sidebar);
    Vue.component("Navbar", Navbar) */

export default {
  data() {
    return {
      datalist: [],
      isShow: false,
    };
  },
  methods: {
    handleClick() {
      console.log("click");
      console.log(this.$refs.mytext.value);
      var list = this.$refs.mytext.value;
      this.datalist.push(list);
    },
    showfun() {
      this.isShow = !this.isShow;
    },
    getData() {
      axios
        .get(
          "/ajax/movieOnInfoList?token=&optimus_uuid=7D2F2F40D63011EAAAB35D44740FE0B93A4D55B170A1406DACD9A41CACCF02B6&optimus_risk_level=71&optimus_code=10"
        )
        .then((res) => {
          console.log(res.data);
        });
    },
  },
  //axios 请求数据
  // mounted() {
  //

  // },
  // 局部组件
  components: {
    Sidebar: Sidebar,
    Navbar: Navbar,
  },
};
</script>
<style lang="scss">
ul {
  li {
    background-color: blue;
  }
}
</style>
