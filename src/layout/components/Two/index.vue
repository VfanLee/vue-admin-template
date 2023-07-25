<script setup>
import '@/styles/layout/layout-two.scss'
import Navbar from './components/Navbar/index.vue'
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain/index.vue'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <div class="l-layout-two">
    <Navbar />
    <div class="l-main">
      <Sidebar />
      <AppMain />
    </div>
  </div>
</template>
