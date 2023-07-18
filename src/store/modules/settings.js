import { defineStore } from 'pinia'
import defaultSettings from '@/settings'
import { computed, ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref(defaultSettings)

  const tagsView = computed(() => settings.value.tagsView)
  const fixedHeader = computed(() => settings.value.fixedHeader)
  const sidebarLogo = computed(() => settings.value.sidebarLogo)

  return { tagsView, fixedHeader, sidebarLogo }
})
