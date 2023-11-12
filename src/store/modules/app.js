import { defineStore } from 'pinia'
import { generateColorPalette } from '@/utils/color'
import { getCacheSettings, setCacheSettings, getTheme, setCacheTheme, getCachePrimaryColor, setCachePrimaryColor } from '@/utils/app'
import layoutDefaultSettings from '@/layout/settings'

const useAppStore = defineStore('app', {
  state: () => ({
    theme: getTheme(),
    primaryColor: '',
    settings: getCacheSettings() || layoutDefaultSettings
  }),

  getters: {
    isCollapseSidebar: state => state.settings.isCollapseSidebar,
    isFixedSidebar: state => state.settings.isFixedSidebar,
    isFixedNavbar: state => state.settings.isFixedNavbar,
    isHideSidebar: state => state.settings.isHideSidebar,
    isHideNavbar: state => state.settings.isHideNavbar,
    isHideLogo: state => state.settings.isHideLogo,
    isHidePageFooter: state => state.settings.isHidePageFooter
  },

  actions: {
    setTheme(value) {
      this.theme = value

      document.documentElement.dataset.theme = value
      // 同步主色调
      this.primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary')

      // 持久化
      setCacheTheme(value)
    },
    initPrimaryColor() {
      const cachePrimaryColor = getCachePrimaryColor()

      if (cachePrimaryColor) {
        document.documentElement.style.setProperty(`--color-primary`, cachePrimaryColor)
        const lightColorPalette = generateColorPalette(cachePrimaryColor, '#ffffff', 11)
        for (let i = 1; i < lightColorPalette.length - 1; i++) {
          document.documentElement.style.setProperty(`--color-primary-light-${i}`, lightColorPalette[i])
        }
        const darkColorPalette = generateColorPalette(cachePrimaryColor, '#000000', 11)
        for (let i = 1; i < darkColorPalette.length - 1; i++) {
          document.documentElement.style.setProperty(`--color-primary-dark-${i}`, darkColorPalette[i])
        }
      }

      this.primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary')
    },
    setPrimaryColor(color) {
      this.primaryColor = color

      document.documentElement.style.setProperty(`--color-primary`, color)
      const lightColorPalette = generateColorPalette(color, '#ffffff', 11)
      for (let i = 1; i < lightColorPalette.length - 1; i++) {
        document.documentElement.style.setProperty(`--color-primary-light-${i}`, lightColorPalette[i])
      }
      const darkColorPalette = generateColorPalette(color, '#000000', 11)
      for (let i = 1; i < darkColorPalette.length - 1; i++) {
        document.documentElement.style.setProperty(`--color-primary-dark-${i}`, darkColorPalette[i])
      }

      // 持久化
      setCachePrimaryColor(color)
    },
    setSettings(key, value) {
      this.settings[key] = value

      // 持久化
      setCacheSettings(this.settings)
    }
  }
})

export default useAppStore
