import Layout from '@/layout/index.vue'

export default {
  path: '/xxx',
  component: Layout,
  name: 'xxx',
  redirect: '/xxx/list',
  meta: {
    title: 'xxx 管理',
    icon: 'book'
  },
  children: [
    {
      path: '/xxx/list',
      component: () => import('@/views/xxx/list.vue'),
      name: 'xxxList',
      meta: {
        title: 'xxx 列表',
        hide: true,
        activeMenu: '/xxx'
      }
    },
    {
      path: '/xxx/create',
      component: () => import('@/views/xxx/edit.vue'),
      name: 'xxxCreate',
      meta: {
        title: '创建 xxx',
        hide: true,
        activeMenu: '/xxx'
      }
    },
    {
      path: '/xxx/edit/:id(\\d+)',
      component: () => import('@/views/xxx/edit.vue'),
      name: 'xxxEdit',
      meta: {
        title: '编辑 xxx',
        hide: true,
        activeMenu: '/xxx'
      }
    }
  ]
}
