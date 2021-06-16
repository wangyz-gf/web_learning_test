<template>
  <div>
    cinema
    <ul>
      <li
        v-for="data in datalist"
        :key="data.filmId"
        @click="handleClick(data.filmId)"
      >{{data.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datalist: [],
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