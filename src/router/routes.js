import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: {
      title: '登录',
      allowlist: true
    }
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home.vue'),
        name: 'Home',
        meta: {
          title: '首页'
        }
      }
    ]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    children: [
      {
        path: 'list',
        component: () => import('@/views/example/list.vue'),
        name: 'ExampleList',
        meta: {
          title: 'example list'
        }
      },
      {
        path: 'detail/:id(\\d+)',
        component: () => import('@/views/example/detail.vue'),
        name: 'ExampleDetail',
        meta: {
          title: 'example detail'
        }
      },
      {
        path: 'create',
        component: () => import('@/views/example/create.vue'),
        name: 'ExampleCreate',
        meta: {
          title: 'example create'
        }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit.vue'),
        name: 'ExampleEdit',
        meta: {
          title: 'example edit'
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

  // {
  //   path: '/left-right',
  //   component: () => import('@/views/layout/left-right/index.vue'),
  //   name: 'leftRight',
  //   meta: {
  //     title: '左右布局',
  //     allowlist: true
  //   }
  // },

  // {
  //   path: '/top-bottom',
  //   component: () => import('@/views/layout/top-bottom/index.vue'),
  //   name: 'topBottom',
  //   meta: {
  //     title: '上下布局',
  //     allowlist: true
  //   }
  // },

  // {
  //   path: '/mix-layout1',
  //   component: () => import('@/views/layout/mix-layout1/index.vue'),
  //   name: 'mixLayout1',
  //   meta: {
  //     title: '混合布局1',
  //     allowlist: true
  //   }
  // },

  // {
  //   path: '/mix-layout2',
  //   component: () => import('@/views/layout/mix-layout2/index.vue'),
  //   name: 'mixLayout2',
  //   meta: {
  //     title: '混合布局2',
  //     allowlist: true
  //   }
  // },

  {
    path: '/basic',
    component: () => import('@/views/basic/index.vue'),
    children: [
      {
        path: 'form',
        component: () => import('@/views/basic/form/index.vue'),
        name: 'basicForm',
        meta: {
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
        path: 'form',
        component: () => import('@/views/element/form/index.vue'),
        name: 'elementForm',
        meta: {
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
      meta: {
        allowlist: true
      }
    }
  },

  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    name: 'NotFound',
    meta: {
      title: '404'
    }
  },

  // 处理 404 路由，必须放在最后一个
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

export default routes
