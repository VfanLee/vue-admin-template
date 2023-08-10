<script setup>
import useAppStore from '@/store/modules/app'
import Breadcrumb from '@/layout/components/Breadcrumb.vue'
import UserInfo from '@/components/UserInfo.vue'

const appStore = useAppStore()
</script>

<template>
  <div class="l-navbar">
    <div class="navbar__left">
      <button class="collapse__btn" @click="appStore.setSidebarWidth(!appStore.collapseSidebar)">
        <i class="fa-solid" :class="[appStore.collapseSidebar ? ' fa-outdent' : ' fa-indent']"></i>
      </button>
      <Breadcrumb />
    </div>
    <div class="navbar__right">
      <UserInfo />
    </div>
  </div>
</template>
