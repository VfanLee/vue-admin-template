import Layout from '@/layout/index.vue'

export default {
  path: '/components',
  component: Layout,
  name: '组件',
  redirect: '/components/tinymce',
  meta: {
    title: '组件',
    icon: 'cube'
  },
  children: [
    {
      path: 'tinymce',
      component: () => import('@/views/components/tinymce.vue'),
      meta: {
        title: 'Tinymce'
      }
    },
    {
      path: 'marked',
      component: () => import('@/views/components/marked.vue'),
      meta: {
        title: 'Marked'
      }
    },
    {
      path: 'fullcalendar',
      component: () => import('@/views/components/fullcalendar.vue'),
      meta: {
        title: 'Fullcalendar'
      }
    }
  ]
}
