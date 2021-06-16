<template>
  <div></div>
</template>
<script>
import axios from "axios";

export default {
  props: ["id"],
  mounted() {
    console.log(this.$route.params.id);
    console.log(this.id);
  },
};
</script>