import axios from "axios";
import { ElMessage } from "element-plus";

const service = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    ElMessage.error(error.message);
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  // 请求成功
  response => {
    const { code, message, data } = response.data;
    if (code === 0) {
      return data;
    } else {
      // 请求成功，但业务失败
      ElMessage.error(message);
      return Promise.reject(new Error(message));
    }
  },
  // 请求失败
  error => {
    ElMessage.error(error.message);
    return Promise.reject(error);
  },
);

export default service;
