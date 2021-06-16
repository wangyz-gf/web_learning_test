<template>
  <div></div>
</template>
<script>
import axios from "axios";

export default {
  props: ["id"],
  mounted() {
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.id}&k=4359832`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then(res =>{
      
    });
    // console.log(this.$route.params.id);
    console.log(this.id);
  },
  beforeDestroy() {},
};
</script>