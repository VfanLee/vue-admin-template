import { DEFAULT_LAYOUT } from '../base'
import type { AppRouteRecordRaw } from '../types'

const FORM: AppRouteRecordRaw = {
  path: '/form',
  name: 'Form',
  component: DEFAULT_LAYOUT,
  meta: {
    title: '表单页',
    icon: 'icon-settings',
    requiresAuth: true,
    order: 3,
  },
  children: [
    {
      path: 'step',
      name: 'FormStep',
      component: () => import('@/views/form/step/index.vue'),
      meta: {
        title: '分步表单',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
    {
      path: 'group',
      name: 'FormGroup',
      component: () => import('@/views/form/group/index.vue'),
      meta: {
        title: '分组表单',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
}

export default FORM
