<template>
  <div v-if="filmminifo">
    <img :src="filmminifo.poster" class="poster" />
    <h2>{{filmminifo.name}}</h2>
    <!-- swiper1 -->
    <h2>演职人员</h2>
    <swiper preview="4" class="actorswiper" myclassname="actorswiper">
      <div class="swiper-slide" v-for="data in filmminifo.actors" :key="data.name">
        <img :src="data.avatarAddress" alt />
        <p>{{data.name}}</p>
        <p>{{data.role}}</p>
      </div>
    </swiper>
    <!-- swiper2 -->
    <h2>剧照</h2>
    <swiper preview="3" class="photoswiper" myclassname="photoswiper">
      <div class="swiper-slide" v-for="(data,index) in filmminifo.photos" :key="index">
        <img :src="data" alt />
      </div>
    </swiper>
  </div>
</template>
<script>
import axios from "axios";
import swiper from "@/views/Detail/DetailSwiper";
import bus from "@/bus";
export default {
  data() {
    return { filmminifo: null };
  },
  // props: ["id"],
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
  // 事件总线接收
  beforeMount() {
/*     console.log("进入之前");
    bus.$emit("maizuo", false ); */
    this.$store.sta
  },
  beforeDestroy() {
    console.log("销毁");
    bus.$emit("maizuo", true);
  },
  components: {
    swiper,
  },
};
</script>
<style lang="scss" scoped>
.poster {
  width: 100%;
  height: 300px;
}
</style>