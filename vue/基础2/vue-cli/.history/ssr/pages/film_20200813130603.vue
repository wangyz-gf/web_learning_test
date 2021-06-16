<template>
  <div>
      <nuxt-link to="/film" tag="li" activeClass="active">正在re'ying</nuxt-link>
      <nuxt-link to="/film" tag="li" activeClass="active">film</nuxt-link>
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