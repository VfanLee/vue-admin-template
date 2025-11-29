import { DEFAULT_LAYOUT } from '../base'
import type { AppRouteRecordRaw } from '../types'

const RESULT: AppRouteRecordRaw = {
  path: '/result',
  name: 'Result',
  component: DEFAULT_LAYOUT,
  meta: {
    title: '结果页',
    icon: 'icon-check-circle',
    requiresAuth: true,
    order: 5,
  },
  children: [
    {
      path: 'success',
      name: 'ResultSuccess',
      component: () => import('@/views/result/success/index.vue'),
      meta: {
        title: '成功页',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
    {
      path: 'error',
      name: 'ResultError',
      component: () => import('@/views/result/error/index.vue'),
      meta: {
        title: '错误页',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
}

export default RESULT
