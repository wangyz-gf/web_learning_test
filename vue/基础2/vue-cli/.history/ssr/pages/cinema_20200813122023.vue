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
  asyncData() {
    return axios({
      url:
        "https://m.maizuo.com/gateway?cityId=340800&pageNum=1&pageSize=10&type=1&k=8599976",
    });
  },
  methods: {
    handleClick(id) {
      this.$router.push(`detail/${id}`);
    },
  },
};
</script>