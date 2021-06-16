<template>
  <nav>
    <ul>
      <router-link to="/Cinema" tag="li" activeClass="myclass">Cinema</router-link>
      <route-link to="/Film" tag="li" activeClass="myclass">film</route-link>
      <route-link to="/Center" tag="li" activeClass="myclass">Center</route-link>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
.myclass {
  color: red;
}
</style>