<template>
  <mt-index-list>
    <mt-index-section index="A">
      <mt-cell title="Aaron"></mt-cell>
      <mt-cell title="Alden"></mt-cell>
      <mt-cell title="Austin"></mt-cell>
    </mt-index-section>
    <mt-index-section index="B">
      <mt-cell title="Baldwin"></mt-cell>
      <mt-cell title="Braden"></mt-cell>
    </mt-index-section>...
    <mt-index-section index="Z">
      <mt-cell title="Zack"></mt-cell>
      <mt-cell title="Zane"></mt-cell>
    </mt-index-section>
  </mt-index-list>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import { IndexList, IndexSection } from "mint-ui";
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
export default {
  data() {
    return {
      datalist: [],
    };
  },
  mounted() {
    axios({
      url: "https://m.maizuo.com/gateway?k=3905727",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596900605147450522238977"}',
        "X-Host": "mall.film-ticket.city.list",
      },
    }).then((res) => {
      //   console.log(res.data);
      //   this.datalist = this.handleCity(res.data.data.citys);
    });
  },
  methods: {
    handleCity(datalist) {
      console.log(datalist);
      var letterArr = [];
      for(var i =)
    },
  },
};
</script>