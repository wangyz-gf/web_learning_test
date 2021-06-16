<template>
  <div>datail</div>
</template>
<script>
export default {
  import axios from 'axios'
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>