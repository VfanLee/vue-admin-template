<script setup name="Sidebar">
import useAppStore from '@/stores/app'
import SidebarLogo from './components/SidebarLogo.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import SidebarCollapseButton from './components/SidebarCollapseButton.vue'

const appStore = useAppStore()
</script>

<template>
  <div
    class="l-sidebar"
    :class="{
      'is-collapse': appStore.isCollapse,
      'is-hide': appStore.isHideSidebar
    }"
  >
    <div class="l-sidebar__inner" :class="{ 'is-fixed': appStore.isFixedSidebar }">
      <div class="l-sidebar__header">
        <SidebarLogo />
      </div>
      <div class="l-sidebar__body">
        <SidebarMenu />
      </div>
      <div class="l-sidebar__footer">
        <SidebarCollapseButton />
      </div>
    </div>
  </div>
</template>
