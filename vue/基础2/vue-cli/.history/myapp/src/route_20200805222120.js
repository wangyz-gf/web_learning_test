import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routers: [{
            path: "/cinema",
            compenent: Cinema
        },
        {
            path: "/film",
            compenent: Film
        },
        {
            path: "/center",
            compenent: Center
        }
    ]


})