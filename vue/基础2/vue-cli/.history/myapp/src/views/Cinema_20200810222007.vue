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
    data(){
        return{
            m
        }
    },
  mounted() {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=310100&k=5542281",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596900605147450522238977","bc":"110100"}',
        // "X-Host": "mall.cfg.cinema.banners",
      },
    }).then((res) => console.log(res.data));
  },
};
</script>
<style lang="scss" scoped>
.cinema {
  overflow: hidden;
}
</style>
