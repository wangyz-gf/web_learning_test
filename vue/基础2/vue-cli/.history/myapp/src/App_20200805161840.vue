<template>
  <div>
    hello vue
    <button @click="handleClick">点击</button>
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