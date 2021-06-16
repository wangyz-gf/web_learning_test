<template>
  <nav>
    <ul>
      <i></i>
      <router-link to="/cinema" tag="li" active-class="myclass">Cinema</router-link>
      <router-link to="/film" tag="li" active-class="myclass">film</router-link>
      <router-link to="/center" tag="li" active-class="myclass">Center</router-link>
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