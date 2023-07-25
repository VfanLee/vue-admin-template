import useUserStore from './store/modules/user'
import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  NProgress.start()

  /* 是否已经登录 */
  if (userStore.token) {
    // 是否进入登录页
    if (to.path === '/login') {
      return next('/')
    } else {
      if (userStore.userInfo) {
        next()
      } else {
        try {
          await userStore.getUserInfo()
          next()
        } catch (error) {
          ElMessage({
            type: 'error',
            message: 'token 已失效，请重新登录'
          })
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
  document.title = to.meta.title || 'Vue3 Admin Template'
  NProgress.done()
})
