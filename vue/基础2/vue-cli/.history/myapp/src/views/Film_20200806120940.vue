<template>
  <div>
    <router-view></router-view>
    film组件

  </div>
</template>
<script>
export default {
  data() {
    return {
      datalist: [111, 222, 333],
    };
  },
  methods: {
    handleClick(id) {
      console.log(this.$routerid);
    },
  },
};
</script>