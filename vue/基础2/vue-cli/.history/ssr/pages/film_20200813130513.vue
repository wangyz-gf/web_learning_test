<template>
  <div>
      
    <Nuxt />
    <nuxt-child></nuxt-child>
  </div>
</template>
<script>
import comingSoon from "./film/comingSoon";
export default {
  conponents: {
    comingSoon,
  },
};
</script>