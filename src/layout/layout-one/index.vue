<script setup>
import '@/styles/layout/layout-one/index.scss'
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar/index.vue'
import AppMain from './components/AppMain/index.vue'
</script>

<template>
  <div class="l-layout-one">
    <Sidebar />
    <el-scrollbar class="l-main">
      <Navbar />
      <AppMain />
    </el-scrollbar>
  </div>
</template>
