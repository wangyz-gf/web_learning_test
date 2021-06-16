<template>
  <div>
    comingsoon
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
    handleClick(id) {
      console.log(this.$router.push{});
    },
  },
};
</script>