<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
    props: ["preview", "myclassname"];
  mounted() {
    var mySwiper = new Swiper("." + this.myclassname, {
      slidesPerView: this.preview,
      spaceBetween: 30,
    });
  },
};
</script>
<style lang="scss" scoped>
.swiper-wrapper {
  img {
    width: 100%;
  }
}
</style>