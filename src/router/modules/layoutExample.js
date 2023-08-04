export default {
  path: '/layout',
  component: () => import('@/views/layout/index.vue'),
  name: 'layout',
  meta: {
    title: '布局示例',
    icon: 'wand-magic-sparkles',
    allowlist: true
  }
}
