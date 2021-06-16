<template>
  <div>
    hello vue
    <input type="text" ref="mytext">
    <button @click="handleClick">点击</button>
    <ul>
      <li v-for="data in datalist">
        {{data}}
      </li>
    </ul>
    <Navbar></Navbar>
  </div>
</template>

<script>
  import Vue from "vue"
  import Sidebar from "./components/Sidebar.vue";
  import Navbar from './components/Navbar.vue'
  // 导入组件
  Vue.component("Sidebar", Sidebar);
  Vue.component("Navbar", Navbar)

  export default {
    data() {
      return {
        datalist: []
      }
    },
    methods: {
      handleClick() {
        console.log("click")
        console.log(this.$refs.mytext.value)
        var list = this.$refs.mytext.value;
        this.datalist.push(list)
      }
    }
  }
</script>