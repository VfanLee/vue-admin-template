import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { reqLogin, reqGetUserInfo } from "@/api/user";
import { getToken, setToken } from "@/utils/auth";

const useUserStore = defineStore("user", () => {
  let token = ref(getToken());
  let userInfo = ref({});

  /* 登录 */
  const login = userInfo => {
    return new Promise((resolve, reject) => {
      reqLogin({
        username: userInfo.username,
        password: userInfo.password,
      })
        .then(res => {
          setToken(res);
          token.value = res;
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  /* 获取用户信息 */
  const getUserInfo = async () => {
    const res = await reqGetUserInfo();
    userInfo.value = res;
    return res;
  };

  const hasUserInfo = computed(() => {
    return Object.keys(userInfo.value).length > 0;
  });

  return {
    token,
    userInfo,
    login,
    getUserInfo,
    hasUserInfo,
  };
});

export default useUserStore;
