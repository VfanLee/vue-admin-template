<script setup>
import { ref } from "vue";

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
        <button class="user-info">
          <img
            src="https://avatars.githubusercontent.com/u/62793687"
            alt="avatar"
          />
          <span>admin</span>
        </button>
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
