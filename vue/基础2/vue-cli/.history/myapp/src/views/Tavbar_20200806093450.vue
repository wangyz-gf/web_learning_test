<template>
  <nav>
    <route-link to="/Cinema" tag="li" activeClass="myclass">Cinema</route-link>
    <route-link to="/Film" tag="li" acitveClass="myclass">film</route-link>
    <route-link to="/Center" tag="li" acitveClass="myclass">Center</route-link>
  </nav>
</template>
<style lang="scss" scoped>
.myclass {
  color: red;
}
</style>