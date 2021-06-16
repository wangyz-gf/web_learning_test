import Vue from 'vue'
import VueRouter from 'vue-router'
import Center from "@/views/Center"
import Center from "@/views/Center"
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Center
  },
  {
    path: "/file",
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router