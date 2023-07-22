<script setup>
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <div class="l-sidebar">
    <div class="c-logo" v-if="appStore.sidebarLogo"></div>
    <div class="c-menu__wrap">
      <div class="c-menu"></div>
      <div class="c-sub-menu"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
