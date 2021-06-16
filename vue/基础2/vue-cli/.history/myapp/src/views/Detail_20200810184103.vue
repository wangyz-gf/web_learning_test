<template>
  <div v-if="filmminifo">
    <img :src="filmminifo.poster" alt />
    <h2>{{filmminifo.name}}</h2>
    <h2>演职人员</h2>
    <swiper preview="4" class="actorswiper" myclassname="actorswiper">
      <div class="swiper-slide" v-for="data in filmminifo.actors" :key="data.name">
        <img :src="data.avatarAddress" alt />
      </div>
    </swiper>
  </div>
</template>
<script>
import axios from "axios";
import swiper from "@/views/Detail/DetailSwiper";
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

  components: {
    swiper,
  },
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