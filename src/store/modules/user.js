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

  getters: {
    menus: state => state.permission.menus,
    roles: state => state.roles
  },

  actions: {
    async login(data) {
      const { code, result, message } = await reqLogin(data)
      if (code === 200) {
        this.token = result.token
        setToken(result.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(message))
      }
    },

    async getUserInfo() {
      const { code, result, message } = await reqUserInfo(this.token)
      if (code === 200) {
        this.userInfo = result
        return result
      } else {
        return Promise.reject(new Error(message))
      }
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
