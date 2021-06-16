<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data" @click='han'>{{data}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datalist: [111, 222, 333],
    };
  },
};
</script>