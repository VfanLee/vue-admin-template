import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import { reqLogin, reqGetUserInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";

const useUserStore = defineStore("user", () => {
  //#region state
  let token = ref(getToken());
  let userInfo = ref({});
  //#endregion

  //#region action
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

  /* 退出登录 */
  const logout = () => {
    removeToken();
    token.value = "";
    userInfo.value = {};
    router.replace("/login");
  };
  //#endregion

  //#region getter
  /* 是否存在用户信息 */
  const hasUserInfo = computed(() => {
    return Object.keys(userInfo.value).length > 0;
  });
  //#endregion

  return {
    token,
    userInfo,
    login,
    getUserInfo,
    logout,
    hasUserInfo,
  };
});

export default useUserStore;
