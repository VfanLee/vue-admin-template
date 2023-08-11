import Layout from '@/layout/index.vue'
import Login from '@/views/login/index.vue'
import effect from './modules/effect'
import components from './modules/components'
import rbac from './modules/rbac'
import article from './modules/article'
import nested from './modules/nested'
import i18n from './modules/i18n'
import GUIs from './modules/GUIs'
import layoutExample from './modules/layoutExample'
import form from './modules/form'
import table from './modules/table'
import errorPage from './modules/errorPage'

/**
  meta 参数说明:
    title: 设置该路由在侧边栏和面包屑中展示的名字

    icon: 设置该路由的图标

    allowlist: 路由白名单

    hide: 当设置 true 的时候该路由不会在侧边栏出现（默认 false），如 401，login 等页面，或者如一些编辑页面 /edit/1

    alwaysShow: 当你一个路由下面的 children 声明的路由大于 1 个时，自动会变成嵌套的模式
                只有一个时，会将那个子路由当做根路由显示在侧边栏
                若你想不管路由下面的 children 声明的个数都显示你的根路由，你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由

    activeMenu: 当路由设置了该属性，则会高亮相对应的侧边栏。
                这在某些场景非常有用，比如：一个文章的列表页路由为：/article/list
                点击文章进入文章详情页，这时候路由为/article/1，但你想在侧边栏高亮文章列表的路由，就可以进行如下设置

    hideBreadcrumb: 如果设置为 true，则不会在面包屑中显示
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
  effect,

  components,

  rbac,

  article,

  nested,

  i18n,

  GUIs,

  layoutExample,

  form,

  table,

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
