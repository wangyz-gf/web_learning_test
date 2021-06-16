<template>
  <div>
    cinema
    <ul>
      <li v-for="data in datalist" :key="data" @click="handleClick(data)">{{data}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datalist: ["111", "222", "333"],
    };
  },
  asyncData()
  methods: {

    handleClick(id) {
      this.$router.push(`detail/${id}`);
    },
  },
};
</script>