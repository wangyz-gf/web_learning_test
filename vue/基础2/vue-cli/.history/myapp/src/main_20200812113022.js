import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
// 导入element库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 导入mint ui库
import moduleName from 'module';


Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')