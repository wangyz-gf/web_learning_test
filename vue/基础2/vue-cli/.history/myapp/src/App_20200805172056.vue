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
  </div>
</template>

<script>
import sidebar from ""


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