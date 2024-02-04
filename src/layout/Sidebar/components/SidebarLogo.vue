<script setup>
import useAppStore from '@/stores/app'

const appStore = useAppStore()
</script>

<template>
  <a class="sidebar-logo" href="javascript:;" v-if="!appStore.isHideLogo">
    <img v-show="appStore.isCollapse" src="@/assets/vite.svg" alt="logo" />
    <h1 v-show="!appStore.isCollapse">Vue3 Admin Template</h1>
  </a>
</template>

<style lang="scss">
.sidebar-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 68px;
  text-decoration: none;
  white-space: nowrap;
  color: var(--text-color-primary);

  img {
    width: 32px;
    height: 32px;
  }

  h1 {
    margin: 0;
    font-size: 18px;
    font-family: 'Pacifico', cursive;
  }
}
</style>
