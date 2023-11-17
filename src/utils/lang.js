import i18n from '@/i18n'
import { getItem, setItem } from './storage'

/**
 * 获取语言
 * @returns {string}
 */
export function getCacheLang() {
  return getItem('lang')
}

/**
 * 本地缓存语言
 * @param {string} lang 语言
 */
export function setCacheLang(lang) {
  setItem('lang', lang)
}

/**
 * 获取国际化路由标题
 * @param {string} title route title i18n key
 * @returns {string}
 */
export const getI18nTitle = title => {
  const hasKey = i18n.global.te('route.' + title)
  if (hasKey) {
    return i18n.global.t('route.' + title)
  }
  return title
}
