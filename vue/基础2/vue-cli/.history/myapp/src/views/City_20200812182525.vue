<template>
  <mt-index-list>
    <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
      <mt-cell :title="city.name" v-for="city in data.list" :key="city.cityId"></mt-cell>
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
      this.datalist = this.handleCity(res.data.data.cities);
      //   console.log(res.data.data.cities);
    });
  },
  methods: {
    handleCity(datalist) {
      console.log(datalist);
      var letterArr = [];
      //   遍历26个字母出来
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i));
      }
      console.log(letterArr);
      //   筛选符合相应的字符项
      var newList = [];
      for (var j = 0; j < letterArr.length; j++) {
        var arr = datalist.filter(
          (item) => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase()
        );
        if (arr.length > 0) {
          newList.push({
            index: letterArr[j],
            item: arr,
          });
        }
      }
      console.log(newList);
      return newList;
    },
  },
};
</script>