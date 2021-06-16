<template>
  <div>
    <nuxt-link to="/comingSoon" tag="li" activeClass="active">正在热映</nuxt-link>
    <nuxt-link to="/film/hotPlaying" tag="li" activeClass="active">即将上映</nuxt-link>
    <nuxt-child></nuxt-child>
  </div>
</template>
