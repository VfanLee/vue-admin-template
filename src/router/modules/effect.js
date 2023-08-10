import Layout from '@/layout/index.vue'

export default {
  path: '/effect',
  component: Layout,
  name: 'effect',
  redirect: '/effect/loading',
  meta: {
    title: '动态特效',
    icon: 'spinner'
  },
  children: [
    {
      path: '/effect/loading',
      component: () => import('@/views/effect/loading/index.vue'),
      name: 'effectLoading',
      meta: {
        title: '加载动效'
      }
    },
    {
      path: '/effect/button',
      component: () => import('@/views/effect/button/index.vue'),
      name: 'effectButton',
      meta: {
        title: '按钮动效'
      }
    }
  ]
}
