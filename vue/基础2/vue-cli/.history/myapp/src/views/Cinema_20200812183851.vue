<template>
  <div class="cinema" :style="mystyle">
    <ul>
      <li v-for="data in 173" :key="data">{{data}}</li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      mystyle: {
        height: "0px",
      },
    };
  },
  mounted() {

    //加载数据
    axios({
      url:'https://m.maizuo.com/gateway?cityId=340800&ticketFlag=1&k=951706',
      headers:{
       ' X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596900605147450522238977"}'
X-Host: mall.film-ticket.cinema.list
      }
    })


    console.log(document.documentElement.clientHeight);
    this.mystyle.height = document.documentElement.clientHeight - 50 + "px";
    this.$nextTick(() => {
      /* eslint-disable no-new */
      new BetterScroll(".cinema", {
        scrollbar: {
          fade: true,
          interactive: false, // 1.8.0 新增
        },
      });
    });
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
  position: relative;
}
</style>
