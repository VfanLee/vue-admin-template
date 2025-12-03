import { DEFAULT_LAYOUT } from '../base'
import type { AppRouteRecordRaw } from '../types'

const route: AppRouteRecordRaw = {
  path: '/play',
  name: 'Play',
  component: DEFAULT_LAYOUT,
  meta: {
    title: '演练场',
    requiresAuth: true,
    icon: 'icon-star',
    order: 102,
  },
  children: [
    {
      path: 'fabric',
      name: 'PlayFabric',
      component: () => import('@/views/play/fabric/index.vue'),
      meta: {
        title: 'Fabric.js',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'd3',
      name: 'PlayD3',
      component: () => import('@/views/play/d3/index.vue'),
      meta: {
        title: 'D3.js',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
}

export default route
