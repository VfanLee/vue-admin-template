<script setup>
import {} from 'vue'
import { useSettingsStore } from '@/store/modules/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="l-navbar fixed-header">
    <div class="c-navbar">navbar</div>
    <div class="c-tags-view" v-if="settingsStore.tagsView">tags-view</div>
  </div>
</template>

<style lang="scss" scoped>
.fixed-header {
  position: sticky;
  top: 0;
  left: 0;
}

.c-navbar {
  border-bottom: 1px solid var(--el-border-color);
  background-color: #fff;
}

.c-tags-view {
  border-bottom: 1px solid var(--el-border-color);
  background-color: #fff;
}
</style>
