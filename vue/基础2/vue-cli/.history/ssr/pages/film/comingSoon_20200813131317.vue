<template>
  <div>comingSoon</div>
</template>
<script>
import axios from "axios";
export default {
  asyncData() {
    return axios({
        url:url:process.server?"http://m.maoyan.com/ajax/movieOnInfoList?token=":"/ajax/movieOnInfoList?token="
    });
  },
};
</script>