import Layout from '@/layout/index.vue'
import Login from '@/views/login/index.vue'
import components from './modules/components'
import rbac from './modules/rbac'
import article from './modules/article'
import xxx from './modules/xxx'
import nested from './modules/nested'
import i18n from './modules/i18n'
import layoutExample from './modules/layoutExample'
import form from './modules/form'
import errorPage from './modules/errorPage'

/**
 * meta 参数说明:
 *    title: 用于标签页、菜单标题展示（必须的）
 *    icon: 标题图标展示
 *    hide: 是否在菜单中隐藏
 *    allowlist: 路由白名单
 *    activeMenu: 高亮设置的菜单路径
 */

const constantRoutes = [
  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      title: '登录',
      hide: true,
      allowlist: true
    }
  },

  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    name: 'notAllow',
    meta: {
      title: '401',
      hide: true
    }
  },

  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    name: 'notFound',
    meta: {
      title: '404',
      hide: true
    }
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/homepage.vue'),
        name: 'home',
        meta: {
          title: '首页',
          icon: 'house'
        }
      }
    ]
  }
]

const asyncRoutes = [
  components,

  rbac,

  article,

  xxx,

  nested,

  i18n,

  layoutExample,

  form,

  errorPage,

  {
    path: '/demo',
    component: () => import('@/views/demo.vue'),
    name: 'demo',
    meta: {
      title: 'demo',
      allowlist: true,
      hide: true
    }
  },

  // 处理 404 路由，必须放在最后一个
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

export default [...constantRoutes, ...asyncRoutes]
