<script setup>
import {} from 'vue'
import TagsView from './TagsView.vue'
import { useSettingsStore } from '@/store/modules/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="c-navbar__wrap" :class="{ 'fixed-header': settingsStore.fixedHeader }">
    <div class="c-navbar"></div>
    <TagsView />
  </div>
</template>

<style lang="scss" scoped></style>
