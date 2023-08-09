import Layout from '@/layout/index.vue'

export default {
  path: '/table',
  component: Layout,
  name: 'table',
  redirect: '/table/drag-table',
  meta: {
    title: '表格示例',
    icon: 'table'
  },
  children: [
    {
      path: '/table/drag-table',
      component: () => import('@/views/table/drag-table.vue'),
      name: 'dragTable',
      meta: {
        title: '拖拽表格'
      }
    },
    {
      path: '/table/dynamic-table',
      component: () => import('@/views/table/dynamic-table.vue'),
      name: 'dynamicTable',
      meta: {
        title: '动态表格'
      }
    }
  ]
}
