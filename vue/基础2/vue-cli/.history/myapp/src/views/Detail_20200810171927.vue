<template>
  <div></div>
</template>
<script>
import axios from "axios";

export default {
  props: ["id"],
  mounted() {
    axios({
      url:https://m.maizuo.com/gateway?filmId=${this.id}&k=4359832`
    })
    // console.log(this.$route.params.id);
    console.log(this.id);
  },
  beforeDestroy() {},
};
</script>