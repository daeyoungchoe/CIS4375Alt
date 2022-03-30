import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/trainerlist",
    name: "gettrainer",
    component: () => import("./components/TrainerList")
  },
  {
    path: "/edittrainers/:id",
    name: "updatetrainer",
    component: () => import("./components/EditTrainer")
  },
  {
    path: "/addtrainer",
    name: "addtrainer",
    component: () => import("./components/AddTrainer")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;