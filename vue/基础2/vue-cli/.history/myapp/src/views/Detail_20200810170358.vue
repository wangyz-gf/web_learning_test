<template>
  <div></div>
</template>
<script>
import axios from "axios";

export default {

  mounted() {  props: ["id"],
    // console.log(this.$route.params.id);
    console.log(this.id);
  },
};
</script>