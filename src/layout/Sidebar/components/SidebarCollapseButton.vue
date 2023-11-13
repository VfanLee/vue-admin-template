<script setup>
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <div class="sidebar-collapse-button" @click="appStore.setCollapse(!appStore.isCollapse)">
    <i class="fa-solid" :class="[appStore.isCollapse ? 'fa-indent' : 'fa-outdent']"></i>
  </div>
</template>

<style lang="scss">
.sidebar-collapse-button {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 48px;
  padding: 0 15px;
  user-select: none;
  cursor: pointer;
  transition: 0.2s;

  i[class*='fa-'] {
    font-size: 18px;
  }
}
</style>
