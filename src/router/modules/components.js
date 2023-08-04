import Layout from '@/layout/index.vue'

export default {
  path: '/components',
  component: Layout,
  name: 'components',
  meta: {
    title: '自定义组件',
    icon: 'layer-group'
  },
  children: [
    {
      path: '/components/svg-icon',
      component: () => import('@/views/components/SvgIcon.vue'),
      name: 'componentSvgIcon',
      meta: {
        title: 'SvgIcon'
      }
    },

    {
      path: '/components/wang-editor',
      component: () => import('@/views/components/WangEditor.vue'),
      name: 'componentWangEditor',
      meta: {
        title: '富文本'
      }
    }
  ]
}
