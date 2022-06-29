import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/modulea"
    },
    {
      path: "/modulea",
      name: "modulea",
      component: () =>
        import(/* webpackChunkName: "modulea" */ "../pages/modulea/index")
    }
  ]
});

export default router;
