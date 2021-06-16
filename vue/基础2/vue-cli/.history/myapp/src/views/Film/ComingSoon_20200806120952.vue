<template>
  <div>
    comingsoon
    <ul>
      <li v-for="data in datalist" :key="data" @click="handleClick(data)">{{data}}</li>
    </ul>
  </div>
</template>