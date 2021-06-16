<template>
  <div>comingSoon</div>
</template>
<script>
import axios from "axios";
export default {
  asyncData() {
    return axios({
      url: process.server
        ? "http://m.maoyan.com/ajax/movieOnInfoList?token="
        : "/ajax/movieOnInfoList?token=",
    }).then((res) => {
      console.log(res.data);
    });
  },
};
</script>