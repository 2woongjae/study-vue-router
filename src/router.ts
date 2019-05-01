import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import User from "./views/User.vue";
import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/user/:id",
      component: User,
      children: [
        {
          path: "profile",
          component: Profile
        }
      ]
    },
    {
      path: "/user",
      component: User
    }
  ]
});
