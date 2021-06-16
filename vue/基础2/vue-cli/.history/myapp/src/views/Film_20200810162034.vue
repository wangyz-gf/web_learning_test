<template>
  <div>
    <swiper ref="myheight">
      <!-- <div class="swiper-slide" v-for="n in 3" :key="n">
        <img src alt />
      </div>-->
    </swiper>
    <filmheader class="isFixed"></filmheader>
    <router-view></router-view>
  </div>
</template>
<script>
import swiper from "@/views/Film/Swiper";
import axios from "axios";
import filmheader from "@/views/Film/FilmHeader";
export default {
  data() {
    return {
      datalist: [],
    };
  },
  mounted() {
    //  获取轮播图数据
    // axios({
    //   url: "https://m.maizuo.com/gateway?type=2&cityId=110100&k=5553387",
    //   headers: {
    //     "X-Client-Info":
    //       '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
    //     "X-Host": "mall.cfg.common-banner",
    //   },
    // }).then((res) => {
    //   console.log(res.data);
    //   this.datalist = res.data.data;
    // });
    window.onscroll = this.handleScroll;
  },
  methods: {
    handleScroll() {
      var docHeight = document.documentElement.scrollTop;
      var refHeight = this.$refs.myheight.$el.offsetHeight;

      console.log(docHeight, refHeight);
      if (docHeight >= refHeight) {
      }
    },
  },
  components: {
    swiper,
    filmheader,
  },
};
</script>
<style lang="scss" scoped>
</style>
