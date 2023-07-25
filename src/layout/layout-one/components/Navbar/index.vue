<script setup>
import useAppStore from '@/store/modules/app'
import useUserStore from '@/store/modules/user'
import Breadcrumb from '@/components/Breadcrumb.vue'

const appStore = useAppStore()
const userStore = useUserStore()

const collapseSidebar = () => {
  console.log(appStore.sidebarIsCollapse)
  // appStore.collapseSidebar(!appStore.sidebarIsCollapse)
}

const logout = () => {
  userStore.logout()
}
</script>

<template>
  <div class="l-navbar">
    <div class="c-navbar">
      <button class="collapse__btn" @click="collapseSidebar">
        <i class="fa-solid fa-indent"></i>
      </button>
      <Breadcrumb />
      <div class="navbar__right">
        <el-dropdown trigger="click">
          <div class="user">
            <img src="@/assets/vite.svg" alt="avatar" />
            <span>Admin</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="c-tags-view" v-if="appStore.tagsView">tags-view</div>
  </div>
</template>

<style lang="scss" scoped>
.c-navbar {
  display: flex;
  align-items: center;
  padding-right: 20px;
  border-bottom: 1px solid var(--el-border-color);
  background-color: #fff;

  .collapse__btn {
    width: 60px;
    height: 100%;
    padding: 0;
    background-color: #fff;
    border: none;
    cursor: pointer;
  }

  .el-breadcrumb {
    flex: 1;
  }

  .navbar__right {
    .user {
      display: flex;
      align-items: center;
      user-select: none;

      img {
        width: 32px;
        height: 32px;
        margin-right: 6px;
      }

      span {
        font-size: 14px;
      }
    }
  }
}

.c-tags-view {
  border-bottom: 1px solid var(--el-border-color);
  background-color: #fff;
}
</style>
