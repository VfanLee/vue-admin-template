import useUserStore from '@/stores/user'
import usePermissionStore from '@/stores/permission'
import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { isEmptyObject } from '@/utils'
import { getI18nTitle } from '@/utils/lang'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  const permissionStore = usePermissionStore()

  NProgress.start()

  /* 是否已经登录 */
  if (userStore.token) {
    // 是否进入登录页
    if (to.path === '/login') {
      // 进入首页
      return next({ path: '/' })
    } else {
      if (!isEmptyObject(userStore.userInfo)) {
        next()
      } else {
        try {
          await userStore.getUserInfo()
          const menuCode = await userStore.getMenuCode()

          // 生成动态路由
          const accessRoutes = await permissionStore.generateRoutes(menuCode)
          // 添加动态路由
          accessRoutes.forEach(item => {
            router.addRoute(item)
          })

          // 放行
          next({ ...to, replace: true })
        } catch ({ message }) {
          userStore.logout()
        }
      }
    }
  } else {
    /* 是否为白名单 */
    if (to.meta.allowlist) {
      next()
    } else {
      next(`/login`)
    }
  }
})

router.afterEach((to, from, failure) => {
  document.title = getI18nTitle(to.meta.title)

  NProgress.done()
})
