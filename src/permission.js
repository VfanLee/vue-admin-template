import router from '@/router'
import Cookie from 'js-cookie'

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !Cookie.get('token')) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

router.afterEach((to, from, failure) => {})
