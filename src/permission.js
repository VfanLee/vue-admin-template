import router from "./router";
import useUserStore from "./store/user";
import "nprogress/nprogress.css";
import NProgress from "nprogress";

// 路由白名单
const whiteList = ["/test", "/login"];

// 全局前置守卫
router.beforeEach((to, form, next) => {
  NProgress.start();
  const userStore = useUserStore();

  if (userStore.token) {
    if (to.path === "/login") {
      next("/");
    } else {
      next();
      NProgress.done();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
      NProgress.done();
    } else {
      next("/login");
    }
  }
});
