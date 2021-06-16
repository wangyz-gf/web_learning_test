import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

// const routes = [{
//     path: "/cinema",
//     component: Cinema
//   },
//   {
//     path: "/film",
//     component: Film
//   },
//   {
//     path: "/center",
//     component: Center
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default routes



export default new Router({
  routers: [{
          path: "/cinema",
          component: Cinema
      },
      {
          path: "/film",
          component: Film
      },
      {
          path: "/center",
          component: Center
      }
  ]

})