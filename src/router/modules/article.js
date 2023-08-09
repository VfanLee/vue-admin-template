import Layout from '@/layout/index.vue'

export default {
  path: '/article',
  component: Layout,
  name: 'article',
  redirect: '/article/list',
  meta: {
    title: '文章管理',
    icon: 'book'
  },
  children: [
    {
      path: '/article/list',
      component: () => import('@/views/article/list.vue'),
      name: 'articleList',
      meta: {
        title: '文章列表',
        icon: 'list',
        hide: true,
        activeMenu: '/article',
        hideBreadcrumb: true
      }
    },
    {
      path: '/article/create',
      component: () => import('@/views/article/edit.vue'),
      name: 'articleCreate',
      meta: {
        title: '创建文章',
        hide: true,
        activeMenu: '/article'
      }
    },
    {
      path: '/article/edit/:id(\\d+)',
      component: () => import('@/views/article/edit.vue'),
      name: 'articleEdit',
      meta: {
        title: '编辑文章',
        hide: true,
        activeMenu: '/article'
      }
    },
    {
      path: '/article/detail/:id(\\d+)',
      component: () => import('@/views/article/detail.vue'),
      name: 'articleDetail',
      meta: {
        title: '文章详情',
        hide: true,
        activeMenu: '/article'
      }
    }
  ]
}
