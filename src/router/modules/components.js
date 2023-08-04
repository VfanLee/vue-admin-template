import Layout from '@/layout/index.vue'

export default {
  path: '/components',
  component: Layout,
  name: 'components',
  redirect: '/components/icons',
  meta: {
    title: '自定义组件',
    icon: 'layer-group'
  },
  children: [
    {
      path: '/components/icons',
      component: () => import('@/views/components/icons.vue'),
      name: 'componentIcons',
      meta: {
        title: 'icons'
      }
    }
  ]
}
