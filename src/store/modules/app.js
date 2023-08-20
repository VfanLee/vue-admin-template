import { defineStore } from 'pinia'
import defaultSettings from '@/settings'
import { computed, ref } from 'vue'

const useAppStore = defineStore('app', () => {
  const settings = ref(defaultSettings)

  const isCollapseSidebar = ref(false)

  const sidebarLogo = computed(() => settings.value.sidebarLogo)
  const fixedHeader = computed(() => settings.value.fixedHeader)

  const collapseSidebar = () => {
    isCollapseSidebar.value = !isCollapseSidebar.value

    if (isCollapseSidebar.value) {
      document.documentElement.style.setProperty('--sidebar-width', '48px')
    } else {
      document.documentElement.style.setProperty('--sidebar-width', '208px')
    }
  }

  return {
    isCollapseSidebar,
    sidebarLogo,
    fixedHeader,
    collapseSidebar
  }
})

export default useAppStore
