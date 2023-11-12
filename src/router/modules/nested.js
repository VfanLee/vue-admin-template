import Layout from '@/layout/index.vue'

export default {
  path: '/nested',
  component: Layout,
  name: 'nested',
  redirect: '/nested/menu1/menu1-1',
  meta: {
    title: 'nested',
    icon: 'sitemap-solid'
  },
  children: [
    {
      path: 'menu1',
      component: () => import('@/views/nested/menu1/index.vue'),
      redirect: '/nested/menu1/menu1-1',
      meta: {
        title: 'menu1'
      },
      children: [
        {
          path: 'menu1-1',
          component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
          meta: {
            title: 'menu1-1'
          }
        },
        {
          path: 'menu1-2',
          component: () => import('@/views/nested/menu1/menu1-2/index.vue'),
          redirect: '/nested/menu1/menu1-2/menu1-2-1',
          meta: {
            title: 'menu1-2'
          },
          children: [
            {
              path: 'menu1-2-1',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
              meta: {
                title: 'menu1-2-1'
              }
            },
            {
              path: 'menu1-2-2',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
              meta: {
                title: 'menu1-2-2'
              }
            }
          ]
        },
        {
          path: 'menu1-3',
          component: () => import('@/views/nested/menu1/menu1-3/index.vue'),
          meta: {
            title: 'menu1-3'
          }
        }
      ]
    },
    {
      path: 'menu2',
      component: () => import('@/views/nested/menu2/index.vue'),
      meta: {
        title: 'menu2'
      }
    }
  ]
}
