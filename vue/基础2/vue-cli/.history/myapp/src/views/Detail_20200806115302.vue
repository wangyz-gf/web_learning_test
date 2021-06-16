<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data">data</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datalist: ['111'],
    };
  },
};
</script>