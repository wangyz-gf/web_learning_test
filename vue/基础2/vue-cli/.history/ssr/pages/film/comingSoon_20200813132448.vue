<template>
  <div>comingSoon
      <ul>
          <li v-for="data in datalist" :key="data.id>
               {{data.nm}}
          </li>
      </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  asyncData() {
    return axios({
      url: process.server
        ? "https://m.maoyan.com/ajax/moreComingList?token=&movieIds=1230199%2C342068%2C1167118%2C346178%2C1225993%2C337705%2C1217236%2C1211270%2C293%2C338059&optimus_uuid=7D2F2F40D63011EAAAB35D44740FE0B93A4D55B170A1406DACD9A41CACCF02B6&optimus_risk_level=71&optimus_code=10"
        : "ajax/moreComingList?token=&movieIds=1230199%2C342068%2C1167118%2C346178%2C1225993%2C337705%2C1217236%2C1211270%2C293%2C338059&optimus_uuid=7D2F2F40D63011EAAAB35D44740FE0B93A4D55B170A1406DACD9A41CACCF02B6&optimus_risk_level=71&optimus_code=10",
    }).then((res) => {
      console.log(res.data);
      return {
          datalist:res.data.movieList
      }
    });
  },
};
</script>