<script setup>
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
