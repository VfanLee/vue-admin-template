import { defineStore } from 'pinia'
import { getSettings, saveSettings, getTheme, saveTheme, getPrimaryColor, setPagePrimaryColor, savePrimaryColor } from '@/utils/app'

// init theme
const theme = getTheme()
document.documentElement.dataset.theme = theme

// init primaryColor
const { primaryColor, isCache: isCachePrimaryColor } = getPrimaryColor()
if (isCachePrimaryColor) {
  setPagePrimaryColor(primaryColor)
}

const useAppStore = defineStore('app', {
  state: () => ({
    theme,
    primaryColor,
    isCollapse: false,
    settings: getSettings()
  }),

  getters: {
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
      // 更换主题时，更新主色调
      this.primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary')
      saveTheme(value)
    },
    setPrimaryColor(color) {
      this.primaryColor = color

      setPagePrimaryColor(color)
      savePrimaryColor(color)
    },
    setCollapse(state) {
      this.isCollapse = state
    },
    setSettings(key, value) {
      this.settings[key] = value

      saveSettings(this.settings)
    }
  }
})

export default useAppStore
