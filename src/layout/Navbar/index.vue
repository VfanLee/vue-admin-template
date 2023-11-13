<script setup>
import { ref, computed } from 'vue'
import useAppStore from '@/store/modules/app'
import SidebarCollapseButton from '../Sidebar/components/SidebarCollapseButton.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import LangSwitcher from '@/components/LangSwitcher.vue'
import UserInfo from '@/components/UserInfo.vue'

const appStore = useAppStore()

const navbarWidth = computed(() => {
  if (!appStore.isFixedNavbar || appStore.isHideSidebar) {
    return ''
  }
  return `calc(100% - ${appStore.isCollapse ? '48px' : '208px'})`
})

const isFullscreen = ref(false)
const toggleFullscreen = () => {
  if (document.fullscreenEnabled) {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      isFullscreen.value = false
    } else {
      document.documentElement.requestFullscreen()
      isFullscreen.value = true
    }
  } else {
    alert('您的浏览器不支持全屏模式！')
  }
}
</script>

<template>
  <div
    class="l-navbar"
    :class="{
      'is-fixed': appStore.isFixedNavbar,
      'is-hide': appStore.isHideNavbar
    }"
    :style="{ width: navbarWidth }"
  >
    <!-- 侧边栏收缩按钮 -->
    <SidebarCollapseButton />

    <!-- 面包屑 -->
    <Breadcrumb />

    <!-- 全屏按钮 -->
    <button class="navbar-btn" @click="toggleFullscreen">
      <i v-if="isFullscreen" class="fa-solid fa-compress"></i>
      <i v-else class="fa-solid fa-expand"></i>
    </button>

    <!-- 用户信息 -->
    <UserInfo />

    <!-- 语言切换 -->
    <LangSwitcher />
  </div>
</template>

<style lang="scss" scoped>
.navbar-btn {
  border: none;
  background-color: transparent;
  padding: 0 12px;
  cursor: pointer;
  font-size: 14px;
}

.breadcrumb {
  margin-right: auto;
}

.theme-switcher {
  padding: 0 12px;
}

.user-info {
  padding: 0 12px;
}

.lang-switcher {
  padding-left: 12px;
}
</style>
