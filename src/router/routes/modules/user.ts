import { DEFAULT_LAYOUT } from '../base'
import type { AppRouteRecordRaw } from '../types'

const USER: AppRouteRecordRaw = {
  path: '/user',
  name: 'User',
  component: DEFAULT_LAYOUT,
  meta: {
    title: '个人中心',
    icon: 'icon-user',
    requiresAuth: true,
    order: 7,
  },
  children: [
    {
      path: 'info',
      name: 'UserInfo',
      component: () => import('@/views/user/info/index.vue'),
      meta: {
        title: '个人信息',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'setting',
      name: 'UserSetting',
      component: () => import('@/views/user/setting/index.vue'),
      meta: {
        title: '用户设置',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
}

export default USER
