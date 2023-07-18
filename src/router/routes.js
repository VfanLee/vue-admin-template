import Layout from '@/layout/layout-two/index.vue'

/**
 * meta 参数说明：
 *
 * title：用于标签页、菜单展示
 * allowlist：路由白名单
 * hide：是否菜单隐藏展示
 */

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: {
      title: '登录',
      allowlist: true,
      hide: true
    }
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard.vue'),
        name: 'dashboard',
        meta: {
          title: '控制台'
        }
      }
    ]
  },

  {
    path: '/example',
    component: Layout,
    name: 'example',
    redirect: '/example/list',
    meta: {
      title: 'example'
    },
    children: [
      {
        path: '/example/list',
        component: () => import('@/views/example/list.vue'),
        name: 'ExampleList',
        meta: {
          title: 'example list'
        }
      },
      {
        path: '/example/detail/:id(\\d+)',
        component: () => import('@/views/example/detail.vue'),
        name: 'ExampleDetail',
        meta: {
          title: 'example detail',
          hide: true
        }
      },
      {
        path: 'create',
        component: () => import('@/views/example/create.vue'),
        name: 'ExampleCreate',
        meta: {
          title: 'example create',
          hide: true
        }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit.vue'),
        name: 'ExampleEdit',
        meta: {
          title: 'example edit',
          hide: true
        }
      }
    ]
  },

  {
    path: '/layout',
    component: () => import('@/views/layout/index.vue'),
    name: 'layout',
    meta: {
      title: '布局',
      allowlist: true
    }
  },

  {
    path: '/basic',
    component: () => import('@/views/basic/index.vue'),
    children: [
      {
        path: '/basic/form',
        component: () => import('@/views/basic/form/index.vue'),
        name: 'basicForm',
        meta: {
          title: 'basic 表单',
          allowlist: true
        }
      }
    ]
  },

  {
    path: '/element',
    component: () => import('@/views/element/index.vue'),
    children: [
      {
        path: '/element/form',
        component: () => import('@/views/element/form/index.vue'),
        name: 'elementForm',
        meta: {
          title: 'element 表单',
          allowlist: true
        }
      }
    ]
  },

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

  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    name: 'NotFound',
    meta: {
      title: '404',
      hide: true
    }
  },

  // 处理 404 路由，必须放在最后一个
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    meta: {
      hide: true
    }
  }
]

export default routes
