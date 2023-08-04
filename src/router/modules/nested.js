import Layout from '@/layout/index.vue'

export default {
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
}
