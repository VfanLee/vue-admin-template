import { createI18n } from 'vue-i18n'
import zh from './zh.json'
import en from './en.json'

const messages = {
  zh,
  en
}

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'zh', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages // set locale messages
})

export default i18n
