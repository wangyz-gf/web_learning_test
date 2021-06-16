<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <></  
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
    });

    //   获取数据
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=4359832`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      console.log(res.data);
    });
  },
};
</script>