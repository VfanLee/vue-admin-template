import { defineStore } from 'pinia'
import defaultSettings from '@/settings'
import { computed, ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const settings = ref(defaultSettings)
  const sidebarIsCollapse = ref(false)

  const tagsView = computed(() => settings.value.tagsView)
  const fixedHeader = computed(() => settings.value.fixedHeader)
  const sidebarLogo = computed(() => settings.value.sidebarLogo)

  const collapseSidebar = value => {
    sidebarIsCollapse.value = value
  }

  return {
    sidebarIsCollapse,
    tagsView,
    fixedHeader,
    sidebarLogo,
    collapseSidebar
  }
})
