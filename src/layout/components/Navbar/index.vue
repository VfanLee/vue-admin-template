<script setup>
import { ref } from "vue";
import useUserStore from "@/store/user";

const userStore = useUserStore();
const visibleDrawer = ref(false);
</script>

<template>
  <div class="navbar__container navbar--fixed">
    <div class="navbar__wrap">
      <button class="left-panel">
        <i class="iconfont icon-outdent"></i>
      </button>
      <div class="mid-panel">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
          <el-breadcrumb-item>dashboard</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="right-panel">
        <button>
          <i class="iconfont icon-expend"></i>
        </button>

        <el-dropdown class="user-container">
          <div class="user-info">
            <img :src="userStore.userInfo.avatar" alt="avatar" />
            <span>{{ userStore.userInfo.username }}</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu class="">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont icon-github-fill"></i>
                项目地址
              </el-dropdown-item>
              <el-dropdown-item divided @click="userStore.logout()">
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <button @click="visibleDrawer = true">
          <i class="iconfont icon-skin"></i>
        </button>
      </div>
    </div>
  </div>

  <el-drawer v-model="visibleDrawer" :with-header="false">
    <span>Hi there!</span>
  </el-drawer>
</template>

<style lang="scss" scoped>
.navbar__wrap {
  display: flex;
  align-items: center;
  height: 100%;

  button {
    padding: 0 12px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.025);
    }
  }

  .left-panel {
    flex-shrink: 0;
    height: 100%;
  }

  .mid-panel {
    flex-grow: 1;
  }

  .right-panel {
    flex-shrink: 0;
    display: flex;
    height: 100%;

    .user-info {
      display: flex;
      align-items: center;
      cursor: pointer;

      img {
        width: 24px;
        height: 24px;
        margin-right: 8px;
        border-radius: 12px;
      }
    }
  }
}
</style>
