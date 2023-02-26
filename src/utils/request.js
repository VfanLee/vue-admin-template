import axios from "axios";
import { ElMessage } from "element-plus";
import useUserStore from "@/store/user";

const service = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    const userStore = useUserStore();
    if (userStore.token) {
      config.headers.Authorization = userStore.token;
    }
    return config;
  },
  error => {
    console.log(error.message); // for debug
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
      console.log(message); // for debug
      ElMessage.error(message);
      return Promise.reject(new Error(message));
    }
  },
  // 请求失败
  error => {
    console.log(error.message); // for debug
    ElMessage.error(error.message);
    return Promise.reject(error);
  },
);

export default service;
