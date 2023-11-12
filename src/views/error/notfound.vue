<script setup></script>

<template>
  <div class="error-page">
    <el-button @click="$router.push({ path: '/' })">返回首页</el-button>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
