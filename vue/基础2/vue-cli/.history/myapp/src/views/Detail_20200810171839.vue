<template>
  <div></div>
</template>
<script>
import axios from "axios";

export default {
  props: ["id"],
  mounted() {
    axios({
      url:{}
    })
    // console.log(this.$route.params.id);
    console.log(this.id);
  },
  beforeDestroy() {},
};
</script>