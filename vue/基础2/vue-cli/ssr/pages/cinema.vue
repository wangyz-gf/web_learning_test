<template>
  <div>
    cinema
    <ul>
      <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster" alt />
        <p>{{data.name}}</p>
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
  asyncData() {
    return axios({
      url:
        "https://m.maizuo.com/gateway?cityId=340800&pageNum=1&pageSize=10&type=1&k=8599976",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596900605147450522238977","bc":"340800"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      console.log(res.data);
      return {
        datalist: res.data.data.films,
      };
    });
  },
  methods: {
    handleClick(id) {
      this.$router.push(`detail/${id}`);
    },
  },
};
</script>