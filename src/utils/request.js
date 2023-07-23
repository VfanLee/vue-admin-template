import axios from 'axios'
import useUserStore from '@/store/modules/user'

const request = axios.create({
  // baseURL: 'https://some-domain.com/api/',
  timeout: 3000,
  withCredentials: true // 跨域请求携带 cookie
})

request.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    // 2xx 范围内的状态码都会触发该函数
    return response.data
  },
  error => {
    // 超出 2xx 范围的状态码都会触发该函数
    let message = ''
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'token 过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址不存在'
        break
      case 500:
        message = '服务器错误'
        break
      default:
        message = '网络出现问题'
        break
    }
    ElMessage({
      type: 'error',
      message
    })
    return Promise.reject(error)
  }
)

export default request
