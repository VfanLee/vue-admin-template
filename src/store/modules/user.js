import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import { reqLogin, reqUserInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const useUserStore = defineStore('user', () => {
  const token = ref(getToken())
  const userInfo = ref(null)

  const login = async data => {
    const res = await reqLogin(data)
    if (res.code === 200) {
      token.value = res.result.token
      setToken(res.result.token)
      return 'ok'
    } else {
      return Promise.reject(new Error(res.message))
    }
  }

  const getUserInfo = async () => {
    const res = await reqUserInfo(token.value)
    if (res.code === 200) {
      userInfo.value = res.result
    } else {
      return Promise.reject(new Error(res.message))
    }
  }

  const logout = () => {
    token.value = ''
    removeToken()
    router.replace({ path: '/login' })
  }

  return { token, userInfo, login, getUserInfo, logout }
})

export default useUserStore
