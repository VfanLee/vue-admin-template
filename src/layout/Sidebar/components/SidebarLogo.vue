<script setup>
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <a class="sidebar-logo" href="javascript:;">
    <img src="@/assets/vite.svg" alt="logo" />
    <h1 v-show="!appStore.isCollapse">Admin Template</h1>
  </a>
</template>

<style lang="scss">
.sidebar-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  text-decoration: none;
  white-space: nowrap;
  color: #fff;

  img {
    width: 32px;
    height: 32px;
  }

  h1 {
    margin: 0 0 0 10px;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
