<script setup>
import {} from 'vue'
</script>

<template>
  <div class="app-main">
    <div class="app-main__inner">
      <RouterView />
    </div>
    <el-card :body-style="{ textAlign: 'center' }">Copyright © 2023 Vue3 Admin Template</el-card>
  </div>
</template>

<style lang="scss" scoped></style>
