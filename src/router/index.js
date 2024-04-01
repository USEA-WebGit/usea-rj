import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Journal_Board from "../views/Journal-Board.vue";
import Publication_Policy from "../views/publication/Publication-Policy.vue";
import Publication_Benefit from "../views/publication/Publication-Benefit.vue";
import Publication_Ethics from "../views/publication/Publication-Ethics.vue";
import Instruction_Authors from "../views/instructions/Instruction-Authors.vue";
import Instruction_Expert from "../views/instructions/Instruction-Expert.vue";

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
  {
    path: "/instructions-authors",
    name: "instruction-authors",
    component: Instruction_Authors,
  },
  {
    path: "/instructions-experts",
    name: "instruction-experts",
    component: Instruction_Expert,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
