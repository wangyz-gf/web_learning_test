<template>
  <div>
    <router-view></router-view>film组件
    <ul>
      <li v-for="data in datalist" :key="data" @click="handleClick(data)">{{data}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datalist: [111, 222, 333],
    };
  },
  methods: {
    handleClick() {
      console.log(this.$router);
    },
  },
};
</script>