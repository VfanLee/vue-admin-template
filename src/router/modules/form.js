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
      path: '/form/native',
      component: () => import('@/views/form/native.vue'),
      name: 'nativeForm',
      meta: {
        title: 'native Form'
      }
    },
    {
      path: '/form/nativeForm',
      component: () => import('@/views/form/nativeForm.vue'),
      name: 'nativeFormForm',
      meta: {
        title: 'nativeForm Form'
      }
    },
    {
      path: '/form/vue3',
      component: () => import('@/views/form/basic.vue'),
      name: 'vue3Form',
      meta: {
        title: 'vue3 Form'
      }
    },
    {
      path: '/form/element',
      component: () => import('@/views/form/element.vue'),
      name: 'elementForm',
      meta: {
        title: 'element Form'
      }
    }
  ]
}
