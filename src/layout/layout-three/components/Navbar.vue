<script setup>
import {} from 'vue'
import { useSettingsStore } from '@/store/modules/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="c-navbar__wrap" :class="{ 'fixed-header': settingsStore.fixedHeader }">
    <div class="c-navbar"></div>
    <div class="c-tags-view" v-if="settingsStore.tagsView"></div>
  </div>
</template>

<style lang="scss" scoped></style>
