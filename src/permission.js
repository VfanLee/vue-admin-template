import router from '@/router'
import { getToken } from './utils/auth'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()
  const token = getToken()

  /* 是否已经登录 */
  if (token) {
    // 是否进入登录页
    if (to.path === '/login') {
      return next('/')
    } else {
      next()
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
