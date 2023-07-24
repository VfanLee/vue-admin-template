<script setup>
import {} from 'vue'
</script>

<template>
  <a class="navbar-logo" href="javascript:;">
    <img src="@/assets/vite.svg" alt="logo" />
    <h1 class="ellipsis">Vue3 Admin Template</h1>
  </a>
</template>

<style lang="scss" scoped>
.navbar-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  height: 60px;
  padding: 12px;
  text-decoration: none;
  color: var(--el-text-color);

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
