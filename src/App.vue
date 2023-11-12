<script setup>
import { onMounted } from 'vue'
import useAppStore from './store/modules/app'

const appStore = useAppStore()

onMounted(() => {
  // 设置默认主题
  document.documentElement.dataset.theme = appStore.theme
  // 初始化主色调
  appStore.initPrimaryColor()
})
</script>

<template>
  <RouterView />
</template>
