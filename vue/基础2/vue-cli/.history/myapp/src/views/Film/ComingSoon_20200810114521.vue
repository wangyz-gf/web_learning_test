<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data)">
        <img :src="data.poster" alt />
        <div>
          <h3>{{data.name}}</h3>
          <p>观众评分：{{data.grade}}</p>
          <p>主演：{{data.actors| autorfilter}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
Vue.filter("autorfilter", function (data) {
  console.log(data);
  var autorList = data.map((item) => {
    return item.name;
  });
  console.log(autorList);
  return autorList.join(" ");
  // return autorList.join(" ");
});
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
<style lang="scss" scoped>
ul {
  li {
    width: 100%;
    overflow: hidden;
    padding: 5px 0;
    img {
      // height: 200px;
      width: 40%;
      float: left;
    }
    div {
      overflow: hidden;
      float: left;
      margin-left: 5px;
      h3,
      p {
        margin-left: 20px;
        margin-top: 10px;
      }
    }
  }
}
</style>