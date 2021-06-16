<template>
  <div>
    <ul>
      <li
        v-for="data in $store.getters.comingListGetter"
        :key="data.filmId"
        @click="handleClick(data.isPresale,data.filmId)"
      >
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
import { mapState } from "vuex";
import { MessageBox } from "mint-ui";

Vue.filter("autorfilter", function (data) {
  var autorList = data.map((item) => {
    return item.name;
  });
  return autorList.join(" ");
});
export default {
  computed: {
    ...mapState(["comingList"]),
  },
  mounted() {
    // 判断长度
    if (this.$store.state.comingList.length === 0) {
      this.$store.dispatch("getComingListAction");
    } else {
      console.log("使用缓存数据");
    }
  },

  methods: {
    handleClick(data, id) {
      // this.$router.push(`/detail/${id}`);
      if (!data) {
        MessageBox({
          title: "提示",
          message: "没有排期，看看其他电影吧",
          showCancelButton: true,
        }).then((res) => {
          if (res == "comfirm") {
            console.log("回到首页");
            this.$router.push(
             "/film/comingSoon",
            );
          }
        });
      }
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