<template>
  <div>
    comingsoon
    <ul>
      <li v-for="data in datalist" :key="data" @click="handleClick(data)">{{data}}</li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      datalist: [],
    };
  },
  mounted() {
    // axios
    //   .get(
    //     "https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=6366316"
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    axios({
      url: " http://localhost:8080/",
      headers:{
        X-Host: mall.film-ticket.film.list
      }
    });
  },
  methods: {
    handleClick(id) {
      // this.$router.push(`/detail/${id}`);
      this.$router.push({
        name: "myfilm",
        params: { id: id },
      });
    },
  },
};
</script>