<template>
  <div v-if="filmminifo">
    <img :src="filmminifo.poster" alt />
    <h2>{{filmminifo.name}}</h2>
  </div>
  
</template>
<script>
import axios from "axios";
import swiper from "@/views/Detail/"
export default {
  data() {
    return { filmminifo: null };
  },
  props: ["id"],
  mounted() {
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=4359832`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      console.log(res.data);
      this.filmminifo = res.data.data.film;
      console.log(this.filmminifo);
    });
  },
  beforeDestroy() {},
};
</script>
<style lang="scss" scoped>
div {
  img {
    width: 100%;
    height: 300px;
  }
}
</style>