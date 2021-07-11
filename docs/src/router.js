import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./views/Home/Home.vue";
import AppView from "./views/App/App.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/#/app",
    name: "App",
    component: AppView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;