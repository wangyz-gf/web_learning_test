<template>
  <nav>
      <ul></ul>
    <route-link to="/Cinema" tag="li" activeClass="myclass">Cinema</route-link>
    <route-link to="/Film" tag="li" activeClass="myclass">film</route-link>
    <route-link to="/Center" tag="li" activeClass="myclass">Center</route-link>
  </nav>
</template>
<style lang="scss" scoped>
.myclass {
  color: red;
}
</style>