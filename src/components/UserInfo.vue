<script setup>
import useUserStore from '@/stores/user'

const userStore = useUserStore()
</script>

<template>
  <el-dropdown class="user-info" trigger="click" :popper-options="{ modifiers: [{ name: 'computeStyles', options: { adaptive: false } }] }">
    <div class="user-info__inner">
      <img :src="userStore.userInfo.avatar" alt="avatar" />
      <span>{{ userStore.userInfo.name }}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="userStore.logout()">{{ $t('logout') }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.user-info__inner {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  img {
    width: 24px;
    height: 24px;
    margin-right: 6px;
    border-radius: 6px;
  }

  span {
    font-size: 14px;
  }
}
</style>
