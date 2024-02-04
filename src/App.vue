<script setup>
import { onMounted } from 'vue'
import useAppStore from './stores/app'

const appStore = useAppStore()

onMounted(() => {
  console.log('App Init')

  appStore.init()
})
</script>

<template>
  <RouterView />
</template>
