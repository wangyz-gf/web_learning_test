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

export default {
  data(){
    return
  }
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
