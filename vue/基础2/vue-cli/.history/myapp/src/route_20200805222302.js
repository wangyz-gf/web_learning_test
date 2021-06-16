import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

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