<template>
  <div>
    <swiper>
      <div class="swiper-slide" v-for="n in 10" :key="n">{{n}}</div>
    </swiper>
    <router-view></router-view>film组件
  </div>
</template>
<script>
import swiper from "@/views/Film/Swiper";
import axios from "axios";
export default {
  data() {
    return {
      datalist: [],
    };
  },
  mounted() {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&k=6419780",
      headers:{
        "X-Client-Info": {"a":"3000","ch":"1002","v":"5.0.4","e":"1596900605147450522238977","bc":"110100"}
X-Host: mall.cfg.float-window.banner
      }
    });
  },
  components: {
    swiper,
  },
};
</script>
<style lang="scss" scoped>
div:first-child {
  height: 50px;
  background-color: red;
}
</style>
