import request from "@/utils/request";

// 登录请求
export const reqLogin = data => {
  return request({
    url: "/api/login",
    method: "post",
    data,
  });
};

// 获取用户信息
export const reqGetUserInfo = data => {
  return request({
    url: "/user/info",
    method: "get",
  });
};
