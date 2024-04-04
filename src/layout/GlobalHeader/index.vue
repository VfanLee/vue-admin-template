<script setup>
import LangSwitcher from '@/components/LangSwitcher.vue'
import UserInfo from '@/components/UserInfo.vue'
</script>

<template>
  <div class="global-header">
    <RouterLink class="global-header__logo" to="/dashboard">
      <img src="@/assets/vite.svg" alt="logo" />
      <h1>Vue3 Admin Template</h1>
    </RouterLink>
    <div class="global-header__space"></div>
    <div class="global-header__actions">
      <LangSwitcher class="global-header__actions-item" />
      <UserInfo class="global-header__actions-avatar" />
    </div>
  </div>
</template>

<style lang="scss">
.global-header {
  display: flex;
  align-items: center;
  margin-inline: 16px;
  height: var(--l-header-height);
}

.global-header__logo {
  display: flex;
  align-items: center;
  min-height: 22px;
  font-size: 20px;
  img {
    height: 28px;
  }
  h1 {
    height: 32px;
    margin-block: 0;
    margin-inline: 8px 0;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    color: rgba(0, 0, 0, 0.88);
  }
}

.global-header__space {
  flex: 1 1 0%;
}

.global-header__actions {
  display: flex;
  height: 100%;
}

.global-header__actions-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-block: 0;
  padding-inline: 2px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  .el-tooltip__trigger {
    padding-inline: 12px;
    padding-block: 12px;
    border-radius: 6px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    vertical-align: middle;
    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
}

.global-header__actions-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  color: rgba(0, 0, 0, 0.45);
  .el-tooltip__trigger {
    display: flex;
    align-items: center;
    height: 44px;
    padding-inline: 8px;
    padding-block: 8px;
    border-radius: 6px;
    line-height: 44px;
    color: rgba(0, 0, 0, 0.45);
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
}
</style>
