<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- <slot></slot>  -->
      <div class="swiper-slide">
        Slide 1
        <img src="/myapp/public/img/2.jpg" alt />
      </div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>

    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      //   direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      //   indicatorDots: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>
<style lang="scss" scoped>
.swiper-wrapper {
  text-align: center;
  .swiper-slide {
    img {
      width: 100%;
    }
  }
}
</style>