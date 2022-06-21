import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/HelloWorld.vue"),
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("../views/AboutUs.vue"),
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
