<script setup>
import '@/styles/layout/index.scss'
import Sidebar from './Sidebar/index.vue'
import Navbar from './Navbar/index.vue'
import AppMain from './AppMain/index.vue'
</script>

<template>
  <div class="l-container">
    <Sidebar />
    <div class="l-main__wrap">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>
