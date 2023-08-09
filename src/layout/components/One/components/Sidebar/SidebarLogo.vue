<script setup></script>

<template>
  <a class="sidebar-logo" href="javascript:;">
    <img src="@/assets/vite.svg" alt="logo" />
    <h1 class="ellipsis">Vue3 Admin Template</h1>
  </a>
</template>

<style lang="scss" scoped>
.sidebar-logo {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 12px;
  text-decoration: none;
  color: var(--el-text-color);
  background-color: #fff;

  img {
    width: 32px;
    height: 32px;
    margin-right: 5px;
  }

  h1 {
    margin: 0;
    font-size: 20px;
    font-weight: 400;
  }
}
</style>
