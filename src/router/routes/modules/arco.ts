import { DEFAULT_LAYOUT } from '../base'
import type { AppRouteRecordRaw } from '../types'

const route: AppRouteRecordRaw = {
  path: '/arco',
  name: 'Arco',
  component: DEFAULT_LAYOUT,
  meta: {
    title: 'Arco Design',
    requiresAuth: true,
    icon: 'icon-star',
    order: 8,
  },
  children: [
    {
      path: 'cascader',
      name: 'ArcoCascader',
      component: () => import('@/views/arco/cascader/index.vue'),
      meta: {
        title: '级联选择器',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'upload',
      name: 'ArcoUpload',
      component: () => import('@/views/arco/upload/index.vue'),
      meta: {
        title: '上传组件',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
}

export default route
