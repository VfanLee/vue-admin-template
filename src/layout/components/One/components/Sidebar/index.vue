<script setup>
import useAppStore from '@/store/modules/app'
import SidebarLogo from './SidebarLogo.vue'
import SidebarMenu from './SidebarMenu.vue'

const appStore = useAppStore()
</script>

<template>
  <div class="l-sidebar">
    <SidebarLogo v-if="appStore.sidebarLogo" />
    <el-scrollbar>
      <SidebarMenu />
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.l-sidebar {
  display: flex;
  flex-direction: column;
}
</style>
