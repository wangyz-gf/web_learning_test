<template>
  <div>
    <swiper>
      <div v-for=''></div>
    </swiper>
    <router-view></router-view>film组件
  </div>
</template>
<script>
import swiper from "@/views/Film/Swiper";

export default {
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
