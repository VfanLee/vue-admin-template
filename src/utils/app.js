import { generateColorPalette } from './color'
import layoutDefaultSettings from '@/layout/settings'

/**
 * 获取 layout 设置
 * @returns {Object}
 */
export function getSettings() {
  return JSON.parse(localStorage.getItem('settings')) || layoutDefaultSettings
}

/**
 * 持久化 layout 设置
 * @param {Object} settings layout 设置
 */
export function saveSettings(settings) {
  localStorage.setItem('settings', JSON.stringify(settings))
}

/**
 * 清除持久化的 layout 设置
 */
export function clearCacheSettings() {
  localStorage.removeItem('settings')
}

/**
 * 获取页面主题
 * @returns {String} 主题
 */
export function getTheme() {
  let theme = ''

  const cacheTheme = localStorage.getItem('theme')
  if (cacheTheme) {
    theme = cacheTheme
  } else {
    const now = new Date()
    const hours = now.getHours()
    if (hours >= 6 || hours < 18) {
      theme = 'light'
    } else {
      theme = 'dark'
    }
  }

  return theme
}

/**
 * 持久化主题
 * @param {String} theme 主题
 */
export function saveTheme(theme) {
  localStorage.setItem('theme', theme)
}

/**
 * 清除持久化的主题
 */
export function removeTheme() {
  localStorage.removeItem('theme')
}

/**
 * 设置页面主色调，将覆盖主题主色调
 * @param {String} color 颜色
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
 * 获取页面主色调和主色调的持久化状态
 *
 * 注意：当主色调被缓存时，主题主色调将被覆盖
 * @returns {{primary: String, isCache: Boolean}}
 */
export function getPrimaryColor() {
  let primaryColor = ''
  let isCache = false

  const cachePrimaryColor = localStorage.getItem('primaryColor')
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
 * 持久化页面主色调
 * @param {String} primaryColor 主色调
 */
export function savePrimaryColor(primaryColor) {
  localStorage.setItem('primaryColor', primaryColor)
}

/**
 * 清除持久化的主色调
 */
export function clearPrimaryColor() {
  localStorage.removeItem('primaryColor')
}
