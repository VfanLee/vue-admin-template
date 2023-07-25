<script setup></script>

<template>
  <el-scrollbar class="app-main">
    <RouterView />
    <el-card :body-style="{ textAlign: 'center', fontSize: '14px' }">Copyright © 2023 Vue3 Admin Template</el-card>
  </el-scrollbar>
</template>

<style lang="scss" scoped></style>
