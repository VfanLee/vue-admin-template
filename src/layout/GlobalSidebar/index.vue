<script setup name="Sidebar">
import SidebarMenu from './components/SidebarMenu.vue'
import SidebarCollapsedButton from './components/SidebarCollapsedButton.vue'
</script>

<template>
  <div class="global-sidebar">
    <SidebarMenu />
    <SidebarCollapsedButton />
  </div>
</template>

<style lang="scss">
.global-sidebar {
  overflow: hidden auto;
  height: 100%;
  padding-inline: 8px;
}
</style>
