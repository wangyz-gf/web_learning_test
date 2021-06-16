<template>
  <div class="cinema" :style="mystyle">
    <ul>
      <li v-for="data in 173" :key="data">{{data}}</li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      mystyle: "0px",
    };
  },
};
</script>
<style lang="scss" scoped>
.cinema {
  overflow: hidden;
}
</style>
