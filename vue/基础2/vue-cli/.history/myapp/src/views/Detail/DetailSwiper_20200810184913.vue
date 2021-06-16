<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import axios from "axios";
props: ["preview", "myclassname"];
export default {
  mounted() {
    var mySwiper = new Swiper("." + this.myclassname, {
      slidesPerView: this.pre,
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