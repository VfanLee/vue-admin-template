import { generateColorPalette } from './color'
import layoutDefaultSettings from '@/layout/settings'
import { getItem, setItem, removeItem } from './storage'

/**
 * 获取 layout 设置
 * @returns {any}
 */
export function getSettings() {
  return getItem('settings') || layoutDefaultSettings
}

/**
 * 本地缓存 layout 设置
 * @param {any} settings layout 设置
 */
export function saveSettings(settings) {
  setItem('settings', settings)
}

/**
 * 清除本地缓存的 layout 设置
 */
export function clearCacheSettings() {
  removeItem('settings')
}

/**
 * 获取页面主题
 * @returns {string} 主题
 */
export function getTheme() {
  let theme = ''

  const cacheTheme = getItem('theme')
  if (cacheTheme) {
    theme = cacheTheme
  } else {
    const now = new Date()
    const hours = now.getHours()
    if (hours >= 6 && hours < 18) {
      theme = 'light'
    } else {
      theme = 'dark'
    }
  }

  return theme
}

/**
 * 本地缓存主题
 * @param {string} theme 主题
 */
export function saveTheme(theme) {
  setItem('theme', theme)
}

/**
 * 清除本地缓存的主题
 */
export function removeTheme() {
  removeItem('theme')
}

/**
 * 设置页面主色调，将覆盖主题主色调
 * @param {string} color 颜色
 */
export function setPagePrimaryColor(color) {
  document.documentElement.style.setProperty(`--color-primary`, color)
  const lightColorPalette = generateColorPalette(color, '#ffffff', 11)
  for (let i = 1; i < lightColorPalette.length - 1; i++) {
    document.documentElement.style.setProperty(`--color-primary-light-${i}`, lightColorPalette[i])
  }
  const darkColorPalette = generateColorPalette(color, '#000000', 11)
  for (let i = 1; i < darkColorPalette.length - 1; i++) {
    document.documentElement.style.setProperty(`--color-primary-dark-${i}`, darkColorPalette[i])
  }
}

/**
 * 获取页面主色调和主色调的本地缓存状态
 *
 * 注意：当主色调被缓存时，主题主色调将被覆盖
 * @returns {{primary: String, isCache: Boolean}}
 */
export function getPrimaryColor() {
  let primaryColor = ''
  let isCache = false

  const cachePrimaryColor = getItem('primaryColor')
  if (cachePrimaryColor) {
    primaryColor = cachePrimaryColor
    isCache = true
  } else {
    primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary')
  }

  return {
    primaryColor,
    isCache
  }
}

/**
 * 本地缓存页面主色调
 * @param {string} primaryColor 主色调
 */
export function savePrimaryColor(primaryColor) {
  setItem('primaryColor', primaryColor)
}

/**
 * 清除本地缓存的主色调
 */
export function clearPrimaryColor() {
  removeItem('primaryColor')
}
