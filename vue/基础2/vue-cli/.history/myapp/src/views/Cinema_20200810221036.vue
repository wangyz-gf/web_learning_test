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
      url: "https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=5440610",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => console.log(res.data));
  },
};
</script>