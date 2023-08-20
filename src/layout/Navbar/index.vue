<script setup>
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <div class="l-navbar is-fixed">
    <div class="sidebar__collapse-btn" @click="appStore.collapseSidebar()">
      <i class="fa-solid" :class="[appStore.isCollapseSidebar ? 'fa-indent' : 'fa-outdent']"></i>
    </div>
  </div>
</template>
