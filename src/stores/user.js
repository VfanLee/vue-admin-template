import { defineStore } from 'pinia'
import router from '@/router'
import { reqLogin, reqUserInfo, reqUserMenuCode } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

import usePermissionStore from './permission'
import { constantRoutes } from '@/router/routes'

const useUserStore = defineStore('user', {
  state: () => ({
    token: getToken(),
    userInfo: {},
    menuCode: []
  }),

  getters: {},

  actions: {
    async login(data) {
      const token = await reqLogin(data)
      this.token = token
      setToken(token)
    },

    async getUserInfo() {
      const userInfo = await reqUserInfo()
      this.userInfo = userInfo
      return userInfo
    },

    async getMenuCode() {
      const menuCode = await reqUserMenuCode()
      this.menuCode = menuCode
      return menuCode
    },

    logout() {
      const permissionStore = usePermissionStore()

      this.token = ''
      this.userInfo = {}
      removeToken()

      permissionStore.routes = [...constantRoutes]
      permissionStore.asyncAddRoutes = []

      router.replace({ path: '/login' })
    }
  }
})

export default useUserStore
