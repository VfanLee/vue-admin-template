<script setup>
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()

const logout = () => {
  userStore.userLogout()
}
</script>

<template>
  <el-dropdown trigger="click">
    <div class="user-info">
      <img src="@/assets/vite.svg" alt="avatar" />
      <span>Admin</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
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
</style>
