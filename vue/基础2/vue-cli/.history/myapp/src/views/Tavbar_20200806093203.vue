<template>
  <nav>
    <route-link to="Cinema" tag="li" active-class="myclass">Cinema</route-link>
    <route-link to="Film" tag="li" active-class="myclass">film</route-link>
    <route-link to="Center" tag="li" active-class="myclass">Center</route-link>
  </nav>
</template>
<style lang="sass" scoped>
.myclass{
    color: red;
    }
</style>