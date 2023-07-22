<script setup>
import SidebarLogo from './SidebarLogo.vue'
import SidebarMenu from './SidebarMenu.vue'
</script>

<template>
  <div class="l-sidebar">
    <SidebarLogo />
    <el-scrollbar>
      <SidebarMenu />
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.l-sidebar {
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--el-border-color);
}
</style>
