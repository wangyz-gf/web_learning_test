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
  mounted() {
    console.log(document.documentElement.clientHeight);
    this.mystyle.hei = document.documentElement.clientHeight - 50 + "px";
  },
};
</script>
<style lang="scss" scoped>
ul {
  li {
    height: 50px;
  }
}
.cinema {
    
  overflow: hidden;
}
</style>
