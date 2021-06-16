<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data)">
        <img :src="data.poster" alt />
      </li>
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
      url:
        "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4271989",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      console.log(res.data);
      this.datalist = res.data.data.films;
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
<st