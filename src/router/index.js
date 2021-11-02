import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    children: [
      {
        path: "",
        name: "xtsy",
        component: () => import("../views/xtsy/index.vue"),
      },
      {
        path: "jbxx",
        name: "jbxx",
        component: () => import("../views/jbxx/index.vue"),
      },
      {
        path: "/Homes",
        name: "Homes",
        component: () => import("../views/kcgl/Homes.vue"),
      },
      {
        path: "/Cart",
        name: "Cart",
        component: () => import("../views/kcgl/Cart.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
