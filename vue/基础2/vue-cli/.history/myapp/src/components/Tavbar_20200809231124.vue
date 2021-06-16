<template>
  <nav>
    <ul>
      <router-link to="/Cinema" tag="li" activeClass="myclass">Cinema</router-link>
      <router-link to="/Film" tag="li" activeClass="myclass">film</router-link>
      <!-- <router-link to="/Film" tag="li" activeClass="myclass">film</router-link> -->
      <router-link to="/Center" tag="li" activeClass="myclass">Center</router-link>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
.myclass {
  color: red;
}
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: white;
  ul {
    display: flex;
    li {
      flex-grow: 1;
      line-height: 50px;
      text-align: center;
    }
  }
}
</style>