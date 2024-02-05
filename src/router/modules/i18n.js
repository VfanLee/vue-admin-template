import Layout from '@/layout/index.vue'

export default {
  path: '/i18n',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/i18n/index.vue'),
      name: 'i18n',
      meta: {
        title: 'i18n',
        icon: 'globe'
      }
    }
  ]
}
