import { createI18n } from 'vue-i18n'
import { getCacheLang } from '@/utils/lang'
import zh from './lang/zh.json'
import en from './lang/en.json'
import elementZhCn from 'element-plus/dist/locale/zh-cn.min.mjs'
import elementEn from 'element-plus/dist/locale/en.min.mjs'

const messages = {
  zh: {
    ...zh,
    elementZhCn
  },
  en: {
    ...en,
    elementEn
  }
}

/**
 * 获取默认语言
 * @returns 默认语言
 */
function getDefaultLang() {
  const cacheLang = getCacheLang()
  if (cacheLang) {
    return cacheLang
  }

  const browserLang = navigator.language.toLowerCase()
  const supportLangs = Object.keys(messages)
  for (const lang of supportLangs) {
    if (browserLang.includes(lang)) {
      return lang
    }
  }

  return 'en'
}

const i18n = createI18n({
  legacy: false, // composition api
  globalInjection: true,
  locale: getDefaultLang(),
  fallbackLocale: 'zh',
  messages
})

export default i18n
