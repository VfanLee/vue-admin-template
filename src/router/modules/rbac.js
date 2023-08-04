import Layout from '@/layout/index.vue'

export default {
  path: '/rbac',
  component: Layout,
  name: 'rbac',
  redirect: '/rbac/user',
  meta: {
    title: 'RBAC',
    icon: 'user-shield'
  },
  children: [
    {
      path: '/rbac/user',
      component: () => import('@/views/rbac/user/index.vue'),
      name: 'rbacUser',
      meta: {
        title: '用户管理',
        icon: 'user'
      }
    },
    {
      path: '/rbac/role',
      component: () => import('@/views/rbac/role/index.vue'),
      name: 'rbacRole',
      meta: {
        title: '角色管理',
        icon: 'r'
      }
    },
    {
      path: '/rbac/permission',
      component: () => import('@/views/rbac/permission/index.vue'),
      name: 'rbacPermission',
      meta: {
        title: '权限管理',
        icon: 'shield-halved'
      }
    }
  ]
}
