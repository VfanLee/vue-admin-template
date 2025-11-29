import { DEFAULT_LAYOUT } from '../base'
import type { AppRouteRecordRaw } from '../types'

const VISUALIZATION: AppRouteRecordRaw = {
  path: '/visualization',
  name: 'Vis',
  component: DEFAULT_LAYOUT,
  meta: {
    title: '数据可视化',
    requiresAuth: true,
    icon: 'icon-apps',
    order: 1,
  },
  children: [
    {
      path: 'data-analysis',
      name: 'VisDataAnalysis',
      component: () => import('@/views/visualization/data-analysis/index.vue'),
      meta: {
        title: '数据分析',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
    {
      path: 'multi-dimension-data-analysis',
      name: 'VisMultiDimensionDataAnalysis',
      component: () => import('@/views/visualization/multi-dimension-data-analysis/index.vue'),
      meta: {
        title: '多维度数据分析',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
}

export default VISUALIZATION
