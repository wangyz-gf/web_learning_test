import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from "@/views/Film"
import Center from "@/views/Center"
import Cinema from "@/views/Cinema"
import ComingSoon from "@/views/Film/ComingSoon"
import HotPlaying from "@/views/Film/HotPlaying"

// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/center',
    component: Center,
  },
  {
    path: "/film",
    component: Film,
    // 二级路由
    children: [{
        path: 'comingSoon',
        component: ComingSoon
      },
      {
        path: 'hotPlaying',
        component: HotPlaying
      }
    ]
  },
  {
    path: "/cinema",
    component: Cinema
  },
  // 重定向
  {
path:'*',
component:
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router