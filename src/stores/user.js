import { defineStore } from 'pinia'
import router from '@/router'
import { reqLogin, reqUserInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

import usePermissionStore from './permission'
import { constantRoutes } from '@/router/routes'

const useUserStore = defineStore('user', {
  state: () => ({
    token: getToken(),
    userInfo: {}
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

    logout() {
      const permissionStore = usePermissionStore()

      this.token = ''
      this.userInfo = {}
      removeToken()

      permissionStore.routes = [...constantRoutes]
      permissionStore.addRoutes = []

      router.replace({ path: '/login' })
    }
  }
})

export default useUserStore
