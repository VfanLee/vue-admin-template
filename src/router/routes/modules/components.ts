import { DEFAULT_LAYOUT } from '../base'
import type { AppRouteRecordRaw } from '../types'

const route: AppRouteRecordRaw = {
  path: '/components',
  name: 'Components',
  component: DEFAULT_LAYOUT,
  meta: {
    title: '自定义组件',
    requiresAuth: true,
    icon: 'icon-star',
    order: 101,
  },
  children: [
    {
      path: 'tinymce',
      name: 'CompTinymce',
      component: () => import('@/views/components/tinymce/index.vue'),
      meta: {
        title: 'Tinymce',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'tiptap',
      name: 'CompTiptap',
      component: () => import('@/views/components/tiptap/index.vue'),
      meta: {
        title: 'Tiptap',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
}

export default route
