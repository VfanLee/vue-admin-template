import { defineStore } from 'pinia'
import { constantRoutes, asyncRoutes } from '@/router/routes'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const usePermissionStore = defineStore('permission', {
  state: () => ({
    routes: constantRoutes,
    addRoutes: []
  }),

  getters: {},

  actions: {
    setRoutes(asyncRoutes) {
      this.routes = [...this.routes, ...asyncRoutes]
      this.addRoutes = [...asyncRoutes]
    },

    async generateRoutes(roles) {
      // 根据用户角色过滤动态路由
      const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)

      // 设置总路由表
      this.setRoutes(accessedRoutes)

      return accessedRoutes
    }
  }
})

export default usePermissionStore
