<template>
  <div>datail</div>
</template>
<script>
import axios from "axios";

export default {
  props: ["id"],
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>