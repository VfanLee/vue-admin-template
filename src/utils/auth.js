import Cookies from 'js-cookie'

/**
 * 获取保存的 token
 * @returns {String}
 */
export function getToken() {
  return Cookies.get('token') || ''
}

/**
 * 持久化用户 token
 * @param {String} token token
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
