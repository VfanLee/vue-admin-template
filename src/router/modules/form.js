import Layout from '@/layout/index.vue'

export default {
  path: '/form',
  component: Layout,
  meta: {
    title: '表单示例',
    icon: 'pen'
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
}