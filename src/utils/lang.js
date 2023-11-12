import i18n from '@/i18n'

export function getCacheLang() {
  return localStorage.getItem('lang')
}

export function setCacheLang(lang) {
  localStorage.setItem('lang', lang)
}

/**
 * 获取路由标题
 * @param {String} title route title i18n key
 * @returns
 */
export const getI18nTitle = title => {
  const hasKey = i18n.global.te('route.' + title)

  if (hasKey) {
    const translatedTitle = i18n.global.t('route.' + title)

    return translatedTitle
  }
  return title
}
