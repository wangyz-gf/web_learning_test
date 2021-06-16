import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from "@/views/Film"
import Center from "@/views/Center"
import Center from "@/views/Center"
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/center',
    component: Center
  },
  {
    path: "/file",
    component: Film
  },
  {
    path: "/cinema",
    component: Cinema
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router