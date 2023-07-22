<script setup>
import {} from 'vue'


</script>

<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/a' }">a</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/b' }">b</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/c' }">c</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
  
</style>
