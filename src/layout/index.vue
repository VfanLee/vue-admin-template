<script setup>
import useAppStore from '@/store/modules/app'
import LayoutOne from '@/layout/components/One/index.vue'

const appStore = useAppStore()
</script>

<template>
  <!-- <KeepAlive>
    <component :is="appStore.layout"></component>
  </KeepAlive> -->
  <LayoutOne />
</template>
