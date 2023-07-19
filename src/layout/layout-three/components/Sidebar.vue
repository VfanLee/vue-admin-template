<script setup>
import { useSettingsStore } from '@/store/modules/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="l-sidebar">
    <div class="c-logo" v-if="settingsStore.sidebarLogo"></div>
    <div class="c-menu__wrap">
      <div class="c-menu"></div>
      <div class="c-sub-menu"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
