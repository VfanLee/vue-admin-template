import { defineStore } from 'pinia'
import defaultSettings from '@/settings'
import { computed, ref } from 'vue'

const useAppStore = defineStore('app', () => {
  const settings = ref(defaultSettings)

  // AppMain 刷新
  const refresh = ref(false)
  const changeRefresh = () => {
    refresh.value = !refresh.value
  }

  const sidebarLogo = computed(() => settings.value.sidebarLogo)
  const fixedHeader = computed(() => settings.value.fixedHeader)

  // 收缩 Sidebar
  const isCollapse = ref(false)
  const collapseSidebar = () => {
    isCollapse.value = !isCollapse.value

    if (isCollapse.value) {
      document.documentElement.style.setProperty('--sidebar-width', '48px')
    } else {
      document.documentElement.style.setProperty('--sidebar-width', '208px')
    }
  }

  // 固定 Sidebar
  const isFixedSidebar = ref(true)
  const fixedSidebar = () => {
    isFixedSidebar.value = !isFixedSidebar.value
  }

  // 固定 Navbar
  const isFixedNavbar = ref(true)
  const fixedNavbar = () => {
    isFixedNavbar.value = !isFixedNavbar.value
  }

  return {
    refresh,
    isCollapse,
    isFixedSidebar,
    isFixedNavbar,
    sidebarLogo,
    fixedHeader,
    changeRefresh,
    collapseSidebar,
    fixedSidebar,
    fixedNavbar
  }
})

export default useAppStore
