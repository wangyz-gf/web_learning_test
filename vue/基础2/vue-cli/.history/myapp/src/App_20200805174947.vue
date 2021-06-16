<template>
  <div>
    hello vue
    <input type="text" ref="mytext">
    <button @click="handleClick">点击</button>
    <ul>
      <li v-for="data in datalist" key>
        {{data}}
      </li>
    </ul>
    <Navbar>
      <button @click="showfun()">
        navClick
      </button>
    </Navbar>
    <Sidebar v-show="isShow"></Sidebar>

  </div>
</template>

<script>
  import Vue from "vue";
  import Sidebar from "./components/Sidebar.vue";
  import Navbar from './components/Navbar.vue'
  // 导入组件
  /*   Vue.component("Sidebar", Sidebar);
    Vue.component("Navbar", Navbar) */

  export default {
    data() {
      return {
        datalist: [],
        isShow: false
      }
    },
    methods: {
      handleClick() {
        console.log("click")
        console.log(this.$refs.mytext.value)
        var list = this.$refs.mytext.value;
        this.datalist.push(list)
      },
      showfun() {
        this.isShow = !this.isShow;
      }

    },
    // 局部组件
    components: {
      Sidebar: Sidebar,
      Navbar: Navbar,
    }
  }
</script>
<style lang="scss">
  

</style>