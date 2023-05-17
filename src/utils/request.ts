import axios from 'axios'

const request = axios.create({
  // baseURL: '',
  timeout: 3000,
})

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    // 2xx 范围内的状态码都会触发该函数。
    return response.data
  },
  error => {
    // 超出 2xx 范围的状态码都会触发该函数。
    return Promise.reject(error)
  }
)

export default request
