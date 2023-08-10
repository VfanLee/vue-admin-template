import Layout from '@/layout/index.vue'

export default {
  path: '/article',
  component: Layout,
  name: 'article',
  redirect: '/article/list',
  meta: {
    title: '文章管理',
    icon: 'book',
    alwaysShow: true
  },
  children: [
    {
      path: '/article/list',
      component: () => import('@/views/article/list.vue'),
      name: 'articleList',
      meta: {
        title: '文章列表',
        icon: 'list',
        activeMenu: '/article'
      }
    },
    {
      path: '/article/create',
      component: () => import('@/views/article/edit.vue'),
      name: 'articleCreate',
      meta: {
        title: '创建文章',
        activeMenu: '/article'
      }
    },
    {
      path: '/article/edit/:id(\\d+)',
      component: () => import('@/views/article/edit.vue'),
      name: 'articleEdit',
      meta: {
        title: '编辑文章',
        activeMenu: '/article'
      }
    },
    {
      path: '/article/detail/:id(\\d+)',
      component: () => import('@/views/article/detail.vue'),
      name: 'articleDetail',
      meta: {
        title: '文章详情',
        activeMenu: '/article'
      }
    }
  ]
}
