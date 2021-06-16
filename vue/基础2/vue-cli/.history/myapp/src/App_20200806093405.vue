<template>
  <div>
    <router-view></router-view>
    <!-- <input type="text" ref="mytext" /> -->
    <button @click="handleClick">点击</button>
    <button @click="getData()">获取数据</button>
    <ul>
      <li v-for="data in datalist" :key="data">{{ data }}</li>
    </ul>
    <Navbar>
      <button @click="showfun()">navClick</button>
    </Navbar>
    <Sidebar v-show="isShow"></Sidebar>
    <Tavbar></Tavbar>
  </div>
</template>

<script>
import Vue from "vue";
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import Tavbar from '@/views/Tavbar';
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
      axios.get("/ajax/movieOnInfoList?token=").then((res) => {
        console.log(res.data);
        // console.log("func");
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
    Tavbar,
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
