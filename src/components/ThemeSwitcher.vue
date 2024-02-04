<script setup>
import { computed } from 'vue'
import useAppStore from '@/stores/app'

const appStore = useAppStore()

const theme = computed({
  get: () => appStore.theme,
  set: value => {
    appStore.setTheme(value)
  }
})
</script>

<template>
  <el-switch v-model="theme" active-value="dark" inactive-value="light" />
</template>
