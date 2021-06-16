<template>
  <div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="false"
    >
      <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster" alt />
        <div>
          <h3>{{data.name}}</h3>
          <p>观众评分：{{data.grade}}</p>
          <p>主演：{{data.actors| autorfilter}}</p>
        </div>
      </li>
      <p v-show="isShow">正在加载中.....</p>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
import { Indicator } from "mint-ui";
import { InfiniteScroll } from "mint-ui";
Vue.use(InfiniteScroll);

Vue.filter("autorfilter", function (data) {
  // console.log(data);
  var autorList = data.map((item) => {
    return item.name;
  });
  // console.log(autorList);
  return autorList.join(" ");
  // return autorList.join(" ");
});
export default {
  data() {
    return {
      datalist: [],
      loading: false,
      isShow: true,
      current: 1,
      total: 0,
    };
  },
  mounted() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle",
    });
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
      Indicator.close();
    });
  },

  methods: {
    loadMore() {
      console.log("到底了");
      this.loading = true;
      this.current++;
      if (this.datalist.length === this.current) {
        this.isShow = false;
        return;
      } else {
        axios({
          url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${this.current}&pageSize=10&type=1&k=4271989`,
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
            "X-Host": "mall.film-ticket.film.list",
          },
        }).then(res =>{
          this.datalist = [...]
        });
      }
    },
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
      width: 30%;
      float: left;
    }
    div {
      width: 60%;
      overflow: hidden;
      float: left;
      margin-left: 5px;
      /*  white-space: nowrap;
      text-overflow: ellipsis; */
      h3,
      p {
        margin-left: 20px;
        margin-top: 10px;
      }
    }
  }
}
</style>