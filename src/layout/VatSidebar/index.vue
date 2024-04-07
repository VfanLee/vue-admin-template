<script setup name="Sidebar">
import SidebarMenu from './components/SidebarMenu.vue'
import SidebarCollapsedButton from './components/SidebarCollapsedButton.vue'
</script>

<template>
  <aside class="vat-sidebar"></aside>
  <aside class="vat-sidebar vat-sidebar--fixed">
    <div class="vat-sidebar__inner">
      <SidebarMenu />
      <SidebarCollapsedButton />
    </div>
  </aside>
</template>

<style lang="scss">
.vat-sidebar__inner {
  overflow: hidden auto;
  height: 100%;
  padding-inline: 8px;
}
</style>
