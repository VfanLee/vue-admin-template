import i18n from '@/i18n'

/**
 * 获取语言
 * @returns {String}
 */
export function getCacheLang() {
  return localStorage.getItem('lang')
}

/**
 * 持久化语言
 * @param {String} lang 语言
 */
export function setCacheLang(lang) {
  localStorage.setItem('lang', lang)
}

/**
 * 获取国际化路由标题
 * @param {String} title route title i18n key
 * @returns {String}
 */
export const getI18nTitle = title => {
  const hasKey = i18n.global.te('route.' + title)

  if (hasKey) {
    const translatedTitle = i18n.global.t('route.' + title)

    return translatedTitle
  }
  return title
}
