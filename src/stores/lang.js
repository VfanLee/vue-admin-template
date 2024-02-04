import { defineStore } from 'pinia'
import i18n from '@/i18n'
import { setCacheLang, getI18nTitle } from '@/utils/lang'
import router from '@/router'

const langStore = defineStore('lang', {
  state: () => ({
    lang: i18n.global.locale.value
  }),

  getters: {},

  actions: {
    setLang(value) {
      this.lang = value

      i18n.global.locale.value = value
      document.documentElement.setAttribute('lang', value)
      // 同步更新 document.title
      document.title = getI18nTitle(router.currentRoute.value.meta.title)

      // 本地缓存
      setCacheLang(value)
    }
  }
})

export default langStore
