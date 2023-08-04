import Layout from '@/layout/index.vue'

export default {
  path: '/error-page',
  component: Layout,
  name: 'errorPage',
  meta: {
    title: '错误页面',
    icon: 'circle-exclamation'
  },
  children: [
    {
      path: '/error-page/401',
      component: () => import('@/views/error-page/401.vue'),
      name: 'errorPage-401',
      meta: {
        title: '401'
      }
    },

    {
      path: '/error-page/404',
      component: () => import('@/views/error-page/404.vue'),
      name: 'errorPage-404',
      meta: {
        title: '404'
      }
    }
  ]
}
