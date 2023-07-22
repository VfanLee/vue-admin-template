import Layout from '@/layout/layout-one/index.vue'

/**
 * meta 参数说明：
 *    title：用于标签页、菜单标题展示（必须）
 *    icon：标题图标展示
 *    hide: 是否在菜单中隐藏
 *    allowlist：路由白名单
 */

const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
      hide: true,
      allowlist: true
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
    redirect: '/homepage',
    children: [
      {
        path: '/homepage',
        component: () => import('@/views/homepage.vue'),
        name: 'homepage',
        meta: {
          title: '首页',
          icon: 'house'
        }
      }
    ]
  },

  {
    path: '/rbac',
    component: Layout,
    meta: {
      title: 'RBAC',
      icon: 'user-shield'
    },
    children: [
      {
        path: '/rbac/user',
        component: () => import('@/views/rbac/user/index.vue'),
        meta: {
          title: '用户管理',
          icon: 'user'
        }
      },
      {
        path: '/rbac/role',
        component: () => import('@/views/rbac/role/index.vue'),
        meta: {
          title: '角色管理',
          icon: 'r'
        }
      },
      {
        path: '/rbac/permission',
        component: () => import('@/views/rbac/permission/index.vue'),
        meta: {
          title: '权限管理',
          icon: 'shield-halved'
        }
      }
    ]
  },

  {
    path: '/article',
    component: Layout,
    name: 'article',
    redirect: '/article/list',
    meta: {
      title: '文章管理',
      icon: 'book'
    },
    children: [
      {
        path: '/article/list',
        component: () => import('@/views/article/list.vue'),
        name: 'articleList',
        meta: {
          title: '文章列表',
          icon: 'list'
        }
      },
      {
        path: '/article/create',
        component: () => import('@/views/article/create.vue'),
        name: 'articleCreate',
        meta: {
          title: '创建文章',
          icon: 'plus'
        }
      },
      {
        path: '/article/detail/:id(\\d+)',
        component: () => import('@/views/article/detail.vue'),
        name: 'articleDetail',
        meta: {
          title: '文章详情',
          hide: true
        }
      },
      {
        path: '/article/edit/:id(\\d+)',
        component: () => import('@/views/article/edit.vue'),
        name: 'articleEdit',
        meta: {
          title: '编辑文章',
          hide: true
        }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    meta: {
      title: '嵌套路由',
      icon: 'folder-tree'
    },
    children: [
      {
        path: '/nested/menu1',
        component: () => import('@/views/nested/menu1/index.vue'),
        meta: {
          title: 'menu1'
        },
        children: [
          {
            path: '/nested/menu1/menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
            meta: {
              title: 'menu1-1'
            }
          },
          {
            path: '/nested/menu1/menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2/index.vue'),
            meta: {
              title: 'menu1-2'
            },
            children: [
              {
                path: '/nested/menu1/menu1-2/menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
                meta: {
                  title: 'menu1-2-1'
                }
              },
              {
                path: '/nested/menu1/menu1-2/menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
                meta: {
                  title: 'menu1-2-2'
                }
              }
            ]
          },
          {
            path: '/nested/menu1/menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3/index.vue'),
            meta: {
              title: 'menu1-3'
            }
          }
        ]
      },
      {
        path: '/nested/menu2',
        component: () => import('@/views/nested/menu2/index.vue'),
        meta: {
          title: 'menu2'
        }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    meta: {
      title: 'form 示例'
    },
    children: [
      {
        path: '/form/basic',
        component: () => import('@/views/form/basic.vue'),
        name: 'basicForm',
        meta: {
          title: 'basic 表单'
        }
      },
      {
        path: '/form/element',
        component: () => import('@/views/form/element.vue'),
        name: 'elementForm',
        meta: {
          title: 'element 表单'
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
