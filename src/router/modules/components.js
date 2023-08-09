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
      component: () => import('@/views/components/svg-icon/index.vue'),
      name: 'componentSvgIcon',
      meta: {
        title: 'SvgIcon'
      }
    },

    {
      path: '/components/wang-editor',
      component: () => import('@/views/components/wang-editor/index.vue'),
      name: 'componentWangEditor',
      meta: {
        title: '富文本'
      }
    },

    {
      path: '/components/object-selector',
      component: () => import('@/views/components/object-selector/index.vue'),
      name: 'componentObjectSelector',
      meta: {
        title: '对象选择器'
      }
    }
  ]
}
