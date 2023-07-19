import { ref } from 'vue'
import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'
import routes from '@/router/routes'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', () => {
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

export const useRoutesStore = defineStore('routes', () => {
  const renderRoutes = ref(routes)

  return { renderRoutes }
})
