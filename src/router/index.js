import { createRouter, createWebHistory } from "vue-router";
import Mixoflairs from "../views/Mixoflairs.vue";
import VideoRecipes from "../views/VideoRecipes.vue";

const routes = [
  {
    path: "/",
    name: "Mixoflairs",
    component: Mixoflairs,
  },
  {
    path: "/VideoRecipes",
    name: "VideoRecipes",
    component: VideoRecipes,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth", 
      };
    }
  },
});

export default router;
