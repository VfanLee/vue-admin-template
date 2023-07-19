import Layout from '@/layout/layout-one/index.vue'

/**
 * meta 参数说明：
 *
 * title：用于标签页、菜单展示
 * allowlist：路由白名单
 * icon：路由图标
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
      title: '示例'
    },
    children: [
      {
        path: '/example/list',
        component: () => import('@/views/example/list.vue'),
        name: 'ExampleList',
        meta: {
          title: '示例 - 列表'
        }
      },
      {
        path: '/example/create',
        component: () => import('@/views/example/create.vue'),
        name: 'ExampleCreate',
        meta: {
          title: '示例 - 创建'
        }
      },
      {
        path: '/example/detail/:id(\\d+)',
        component: () => import('@/views/example/detail.vue'),
        name: 'ExampleDetail',
        meta: {
          title: '示例 - 详情',
          hide: true
        }
      },
      {
        path: '/example/edit/:id(\\d+)',
        component: () => import('@/views/example/edit.vue'),
        name: 'ExampleEdit',
        meta: {
          title: '示例 - 编辑',
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
      allowlist: true,
      hide: true
    }
  },

  {
    path: '/basic',
    component: Layout,
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
    component: Layout,
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
