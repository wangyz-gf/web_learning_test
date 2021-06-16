<template>
  <div>
    film
    <ul>
      <li v-for="data in datalist" :key="data" @click="handleClick">{{data}}</li>
    </ul>
    <router-view></router-view>
  </div>
</template>