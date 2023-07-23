import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import { reqLogin } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const useUserStore = defineStore('user', () => {
  const token = ref(getToken())

  const userLogin = async data => {
    const res = await reqLogin(data)
    if (res.code === 200) {
      token.value = res.result.token
      setToken(res.result.token)
      return 'ok'
    } else {
      return Promise.reject(new Error(res.message))
    }
  }

  const userLogout = () => {
    token.value = ''
    removeToken()
    router.push({ path: '/login' })
  }

  return { token, userLogin, userLogout }
})

export default useUserStore
