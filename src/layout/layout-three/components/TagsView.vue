<script setup>
import {} from 'vue'
import { useSettingsStore } from '@/store/modules/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="c-tags-view" v-if="settingsStore.tagsView"></div>
</template>

<style lang="scss" scoped></style>
