import { createRouter, createWebHistory } from "vue-router";

// 公开路由表
const publicRoutes = [
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
  },
  {
    path: "/test",
    component: () => import("@/views/test/index.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: publicRoutes,
});

export default router;
