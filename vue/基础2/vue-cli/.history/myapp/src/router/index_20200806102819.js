import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from "@/views/Film"
import Center from "@/views/Center"
import Cinema from "@/views/Cinema"
import ComingSoon from "@/views/Film/ComingSoon"
import HotPlaying from "@/views/Film/HotPlaying"

// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = new VueRouter({
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
        { //记住不要加斜杠到路径中，否则会报错 
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
      path: '*',
      redirect: '/film'
    }
  ]

  // const router = new VueRouter({
  //   mode: 'history',
  //   base: process.env.BASE_URL,
  //   routes
  // })
)
export default routes