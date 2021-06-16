<template>
  <div>datail</div>
</template>
<script>
export default {
  data() {
    return {
      datalist: [111, 222, 333],
    };
  },
  methods: {
    handleClick() {
      console.log(this.$router);
    },
  },
};
</script>