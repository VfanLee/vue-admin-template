import { ref } from 'vue'
import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'

export const useUserStore = defineStore('User', () => {
  const token = ref(getToken())

  const userLogin = async data => {
    const res = await reqLogin(data)
    if (res.code === 200) {
      token.value = res.result.token
      setToken(res.token)
      return 'ok'
    } else {
      return Promise.reject(new Error(res.message))
    }
  }

  return { token, userLogin }
})
