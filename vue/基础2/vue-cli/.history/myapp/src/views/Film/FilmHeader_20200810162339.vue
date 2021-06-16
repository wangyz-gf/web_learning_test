<template>
  <div>
    <ul>
      <router-link to="/film/comingSoon" tag="li" activeClass="active">正在热映</router-link>
      <router-link to="/film/hotPlaying" tag="li" activeClass="active">正在热映</router-link>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
ul {
  display: flex;
  li {
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: white;
  }
}

.active {
  color: red;
  border-bottom: 2px solid red;
}
.isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  background-color: white;
}
</style>