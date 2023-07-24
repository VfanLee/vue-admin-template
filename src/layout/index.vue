<script setup>
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <KeepAlive>
    <component :is="appStore.layout"></component>
  </KeepAlive>
</template>
