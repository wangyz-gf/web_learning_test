<template>
  <div class="cinema">
    <ul>
      <!-- <li v-for></li> -->
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&k=8385157",
      
    });
  },
};
</script>