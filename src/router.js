import Vue from "vue";
import Router from "vue-router";
import Skills from "./components/Skills.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import List from "./components/List.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "skills",
      component: Skills
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/list",
      name: "list",
      component: List
    },
    {
      path: "/list",
      name: "list",
      component: List
    },
    {
      path: "/list",
      name: "list",
      component: List
    },
    {
      path: "/list",
      name: "list",
      component: List
    },
    {
      path: "/list",
      name: "list",
      component: List
    }
  ]
});
