<script setup>
import SidebarLogo from './components/SidebarLogo.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <div class="l-sidebar__wrap">
    <div class="l-sidebar" :class="{ 'is-fixed': appStore.isFixedSidebar }">
      <div class="l-sidebar__header">
        <SidebarLogo />
      </div>
      <div class="l-sidebar__body">
        <SidebarMenu />
      </div>
      <div class="l-sidebar__footer">
        <div class="sidebar__collapse-btn" @click="appStore.collapseSidebar()">
          <i class="fa-solid" :class="[appStore.isCollapse ? 'fa-indent' : 'fa-outdent']"></i>
        </div>
      </div>
    </div>
  </div>
</template>
