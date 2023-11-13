import { defineStore } from 'pinia'
import { constantRoutes, asyncRoutes } from '@/router/routes'
import { filterAsyncRoutes } from '@/utils/route'

const usePermissionStore = defineStore('permission', {
  state: () => ({
    routes: [],
    addRoutes: []
  }),

  getters: {},

  actions: {
    setRoutes(asyncRoutes) {
      this.routes = [...constantRoutes, ...asyncRoutes]
      this.addRoutes = [...asyncRoutes]
    },

    async generateRoutes(roles) {
      // 过滤动态路由表
      const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      // 设置总路由表
      this.setRoutes(accessedRoutes)

      return accessedRoutes
    }
  }
})

export default usePermissionStore
