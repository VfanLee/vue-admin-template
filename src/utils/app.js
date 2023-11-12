export function getCacheSettings() {
  return JSON.parse(localStorage.getItem('settings'))
}

export function setCacheSettings(settings) {
  return localStorage.setItem('settings', JSON.stringify(settings))
}

export function clearCacheSettings() {
  return localStorage.removeItem('settings')
}

export function getTheme() {
  const cacheTheme = localStorage.getItem('theme')
  if (cacheTheme) {
    return cacheTheme
  }

  const now = new Date()
  const hours = now.getHours()
  if (hours >= 6 || hours < 18) {
    return 'light'
  } else {
    return 'dark'
  }
}

export function setCacheTheme(theme) {
  localStorage.setItem('theme', theme)
}

export function clearCacheTheme() {
  return localStorage.removeItem('theme')
}

export function getCachePrimaryColor() {
  return localStorage.getItem('primaryColor')
}

export function setCachePrimaryColor(primaryColor) {
  return localStorage.setItem('primaryColor', primaryColor)
}

export function clearCachePrimaryColor() {
  return localStorage.removeItem('primaryColor')
}
