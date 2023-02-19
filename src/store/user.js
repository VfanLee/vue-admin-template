import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { reqLogin } from "@/api/user";
import { getToken, setToken } from "@/utils/auth";

const useUserStore = defineStore("user", () => {
  const token = ref(getToken());

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

  return { token, login };
});

export default useUserStore;
