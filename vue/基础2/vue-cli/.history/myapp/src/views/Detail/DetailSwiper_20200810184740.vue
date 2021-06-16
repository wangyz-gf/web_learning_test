<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import axios from "axios";
props: [];
export default {
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
    });
  },
};
</script>
<sc