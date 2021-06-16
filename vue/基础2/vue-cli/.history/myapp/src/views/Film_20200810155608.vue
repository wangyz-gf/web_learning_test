<template>
  <div>
    <swiper>
      <div class="swiper-slide" v-for=" in datalist" :key="data">{{n}}</div>
    </swiper>
    <filmheader></filmheader>
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
    axios({
      url: "https://m.maizuo.com/gateway?type=2&cityId=110100&k=5553387",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        "X-Host": "mall.cfg.common-banner",
      },
    }).then((res) => {
      console.log(res.data);
      this.datalist = res.data.data;
    });
  },
  components: {
    swiper,
    filmheader,
  },
};
</script>
<style lang="scss" scoped>
div:first-child {
  height: 50px;
  background-color: red;
}
</style>
