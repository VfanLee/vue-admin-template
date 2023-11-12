<script setup>
import useAppStore from '@/store/modules/app'
import SidebarLogo from './components/SidebarLogo.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import SidebarCollapseButton from './components/SidebarCollapseButton.vue'

const appStore = useAppStore()
</script>

<template>
  <div
    class="l-sidebar"
    :class="{
      'is-collapse': appStore.isCollapseSidebar,
      'is-hide': appStore.isHideSidebar
    }"
    @resize="e => console.log(e)"
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
