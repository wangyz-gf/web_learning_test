<template>
  <div>
    <nuxt-link to="/film/comingSoon" tag="li" activeClass="active">正在热映</nuxt-link>
    <nuxt-link to="/film/hotPlaying" tag="li" activeClass="active">即将上映</nuxt-link>
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