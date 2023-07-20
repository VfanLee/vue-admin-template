import Layout from '@/layout/layout-one/index.vue'

/**
 * meta 参数说明：
 *    title：用于标签页、菜单展示
 *    icon：路由图标
 *    hide：是否菜单隐藏展示
 *    allowlist：路由白名单
 */

const demoRoutes = [
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
    path: '/form',
    component: Layout,
    children: [
      {
        path: '/form/basic',
        component: () => import('@/views/form/basic.vue'),
        name: 'basicForm',
        meta: {
          title: 'basic 表单',
          allowlist: true
        }
      },
      {
        path: '/form/element',
        component: () => import('@/views/form/element.vue'),
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
  }
]

const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
      allowlist: true,
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
  }
]

const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/homepage.vue'),
        name: 'homepage',
        meta: {
          title: 'homepage'
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
      title: 'xxx 管理'
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/example/list.vue'),
        name: 'exampleList',
        meta: {
          title: 'xxx列表'
        }
      },
      {
        path: 'create',
        component: () => import('@/views/example/create.vue'),
        name: 'exampleCreate',
        meta: {
          title: '创建xxx'
        }
      },
      {
        path: 'detail/:id(\\d+)',
        component: () => import('@/views/example/detail.vue'),
        name: 'exampleDetail',
        meta: {
          title: 'xxx详情',
          hide: true
        }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit.vue'),
        name: 'exampleEdit',
        meta: {
          title: '编辑xxx',
          hide: true
        }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    children: [
      {
        path: 'menu1',
        children: [
          {
            path: 'menu1-1',
            children: [
              {
                path: 'menu1-1-1'
              },
              {
                path: 'menu1-1-2'
              }
            ]
          },
          {
            path: 'menu1-2'
          }
        ]
      },
      {
        path: 'menu2'
      }
    ]
  },

  {
    path: '/rbac',
    component: Layout,
    children: [
      {
        path: 'user',
        component: () => import('@/views/rbac/user/index.vue')
      },
      {
        path: 'role',
        component: () => import('@/views/rbac/role/index.vue')

      },
      {
        path: 'permission',
        component: () => import('@/views/rbac/permission/index.vue')

      }
    ]
  }
]

// 处理 404 路由，必须放在最后一个
// {
//   path: '/:pathMatch(.*)*',
//   redirect: '/404',
//   meta: {
//     hide: true
//   }
// }

export default [...demoRoutes, ...constantRoutes, ...asyncRoutes]
