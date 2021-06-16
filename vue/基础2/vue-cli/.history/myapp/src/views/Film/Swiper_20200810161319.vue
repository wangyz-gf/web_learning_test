<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- <slot></slot>  -->
      <div class="swiper-slide">Slide 1</div>
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
.swiper-container {
  height: 100px;
}
.swiper-wrapper {
  text-align: center;
  .swiper-slide {
    background-image: url("/myapp/public/img/1.jpg");
  }
}
</style>