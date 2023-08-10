<script setup>
import '@/styles/layout/layout-one/index.scss'
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar/index.vue'
import AppMain from './components/AppMain/index.vue'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <div class="l-layout-one">
    <Sidebar />
    <el-scrollbar class="l-main">
      <div class="navbar__wrap" :class="{ 'fixed-header': appStore.fixedHeader, 'is-collapse': appStore.collapseSidebar }">
        <Navbar />
      </div>
      <AppMain />
    </el-scrollbar>
  </div>
</template>
