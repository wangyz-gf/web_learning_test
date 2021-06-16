<template>
  <div>
    hello vue
    <input type="text" >
    <button @click="handleClick">点击</button>
    <ul>
      <li v-for="data in datalist">
        {{data}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        datalist: []
      }
    },
    methods: {
      handleClick() {
        console.log("click")
      }
    }
  }
</script>