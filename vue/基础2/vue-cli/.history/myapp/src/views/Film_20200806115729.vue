<template>
  <div>
    film
    <ul>
      <li v-for="data in datalist" :key="data" @click="handleClick">{{data}}</li>
    </ul>
    <router-view></router-view>
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