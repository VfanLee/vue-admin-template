<script setup>
import {} from 'vue'
</script>

<template>
  <a class="c-logo" href="javascript:;">
    <img class="logo" src="@/assets/vite.svg" alt="logo" />
    <h1 class="title ellipsis">Vue3 Admin Template</h1>
  </a>
</template>

<style lang="scss" scoped>
.c-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 12px;
  text-decoration: none;
  color: var(--el-text-color);

  .logo {
    width: 32px;
    height: 32px;
    margin-right: 5px;
  }

  .title {
    margin: 0;
    font-size: 20px;
    font-weight: 400;
  }
}
</style>
