import { defineStore } from 'pinia'
import defaultSettings from '@/settings'
import { computed, ref } from 'vue'
import LayoutOne from '@/layout/components/One/index.vue'
import LayoutTwo from '@/layout/components/Two/index.vue'

const useAppStore = defineStore('app', () => {
  const settings = ref(defaultSettings)

  const sidebarIsCollapse = ref(false)

  const layout = computed(() => {
    switch (settings.value.layout) {
      case 1:
        return LayoutOne
      case 2:
        return LayoutTwo
      default:
        return LayoutOne
    }
  })
  const fixedHeader = computed(() => settings.value.fixedHeader)

  const switchLayout = type => {
    settings.value.layout = type
  }

  const collapseSidebar = value => {
    sidebarIsCollapse.value = value
  }

  return {
    sidebarIsCollapse,
    layout,
    fixedHeader,
    switchLayout,
    collapseSidebar
  }
})

export default useAppStore
