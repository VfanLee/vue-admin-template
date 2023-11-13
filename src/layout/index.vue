<script setup>
import '@/styles/components/layout.scss'
import { onMounted } from 'vue'
import Sidebar from './Sidebar/index.vue'
import Navbar from './Navbar/index.vue'
import AppMain from './AppMain/index.vue'
import PageFooter from './PageFooter/index.vue'
import GlobalBtn from './GlobalBtn/index.vue'

onMounted(() => {
  console.log('Layout Init')
})
</script>

<template>
  <div class="l-container">
    <Sidebar />
    <div class="l-main">
      <Navbar />
      <AppMain />
      <PageFooter />
    </div>
  </div>

  <GlobalBtn />
</template>
