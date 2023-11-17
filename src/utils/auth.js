import Cookies from 'js-cookie'

/**
 * 获取保存的 token
 * @returns {string}
 */
export function getToken() {
  return Cookies.get('token') || ''
}

/**
 * 本地缓存用户 token
 * @param {string} token token
 */
export function setToken(token) {
  Cookies.set('token', token)
}

/**
 * 移除用户 token
 */
export function removeToken() {
  Cookies.remove('token')
}
