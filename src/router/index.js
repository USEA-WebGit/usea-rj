import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Journal_Board from "../views/Journal-Board.vue";
import Publication_Policy from "../views/Publication-Policy.vue";
import Publication_Benefit from "../views/Publication-Benefit.vue";
import Publication_Ethics from "../views/Publication-Ethics.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/journal-board",
    name: "journal-board",
    component: Journal_Board,
  },
  {
    path: "/publication-policy",
    name: "publication-policy",
    component: Publication_Policy,
  },
  {
    path: "/publication-benefit",
    name: "publication-benefit",
    component: Publication_Benefit,
  },
  {
    path: "/publication-ethics",
    name: "publication-ethics",
    component: Publication_Ethics,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
