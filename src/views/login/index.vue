<script setup>
import { ref, reactive } from "vue";
import router from "@/router";
import useUserStore from "@/store/user";
import { validatePassword } from "./rules";

// 表单数据
const loginForm = reactive({
  username: "admin",
  password: "123456",
});

// 验证规则
const loginRules = reactive({
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
    {
      validator: validatePassword,
      trigger: "blur",
    },
  ],
});

// 密码框类型
const passwordType = ref("password");
const handleChangePwdType = () => {
  if (passwordType.value === "password") {
    passwordType.value = "text";
  } else {
    passwordType.value = "password";
  }
};

// 处理登录
const userStore = useUserStore();
const loginFormRef = ref(null);
const loginLoading = ref(false);
const handleLogin = () => {
  // 1. 校验
  loginFormRef.value.validate(vaild => {
    if (!vaild) return;

    // 2. 登录
    loginLoading.value = true;
    userStore
      .login(loginForm)
      .then(() => {
        // 3. 登陆成功
        router.push("/");
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        loginLoading.value = false;
      });
  });
};
</script>

<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      scroll-to-error
    >
      <el-form-item>
        <div class="title-container">
          <h3 class="title">登录</h3>
        </div>
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="loginForm.username"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <i class="iconfont icon-user"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          :type="passwordType"
          v-model="loginForm.password"
          placeholder="请输入密码"
        >
          <template #prefix>
            <i class="iconfont icon-lock"></i>
          </template>
          <template #suffix>
            <i
              :class="[
                'iconfont',
                passwordType === 'password' ? 'icon-eye-close' : 'icon-eye',
              ]"
              @click="handleChangePwdType"
            ></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          :loading="loginLoading"
          @click="handleLogin"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  position: relative;

  .login-form {
    position: absolute;
    top: 180px;
    left: 0;
    right: 0;
    width: 520px;
    margin: auto;
    box-sizing: border-box;

    .title-container {
      width: 100%;
      text-align: center;
      font-size: 22px;
    }

    .login-btn {
      width: 100%;
    }
  }
}
</style>
