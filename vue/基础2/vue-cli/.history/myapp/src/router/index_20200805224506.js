import Vue from 'vue'
import VueRouter from 'vue-router'
import Center from "@"
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  // name: 'Home',
  component: Center
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router