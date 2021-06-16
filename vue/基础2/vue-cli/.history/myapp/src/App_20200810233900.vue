<template>
  <div>
    <router-view></router-view>
    <!-- <input type="text" ref="mytext" /> -->
    <!-- <button @click="handleClick">点击</button>
    <button @click="getData()">获取数据</button>
    <ul>
      <li v-for="data in datalist" :key="data">{{ data }}</li>
    </ul>
    <Navbar>
      <button @click="showfun()">navClick</button>
    </Navbar>
    <Sidebar v-show="isShow"></Sidebar>-->
    <Tavbar v-show="isShow"></Tavbar>
  </div>
</template>

<script>
import Vue from "vue";
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import Tavbar from "./components/Tavbar.vue";
import bus from "@/bus/index";

// 导入axios模块
// 导入组件
import axios from "axios";
/*   Vue.component("Sidebar", Sidebar);
    Vue.component("Navbar", Navbar) */

export default {
  data() {
    return {
      datalist: [],
      isShow: true,
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
  // 事件总线监听
  beforeMount() {
    bus.$on("maizuo", (data) => {
      this.isShow = data;
    });
  },

  // 局部组件
  components: {
    Sidebar: Sidebar,
    Navbar: Navbar,
    Tavbar,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}
li {
  list-style: none;
}
Tavbar {
  color: red;
}
</style>
