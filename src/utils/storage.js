/**
 * 获取存储的数据
 * @param {string} key key
 * @param {Storage} mode Storage 模式
 */
export function getItem(key, mode = localStorage) {
  const item = mode.getItem(key)
  try {
    return JSON.parse(item)
  } catch (error) {
    return item
  }
}

/**
 * 存储数据
 * @param {string} key key
 * @param {any} value value
 * @param {Storage} mode Storage 模式
 */
export function setItem(key, value, mode = localStorage) {
  if (typeof value === 'object') {
    mode.setItem(key, JSON.stringify(value))
  } else {
    mode.setItem(key, value)
  }
}

/**
 * 移除存储数据
 * @param {string} key key
 * @param {Storage} mode Storage 模式
 */
export function removeItem(key, mode = localStorage) {
  mode.removeItem(key)
}

/**
 * 移除所有的存储数据
 * @param {Storage} mode Storage 模式
 */
export function clear(mode = localStorage) {
  mode.clear()
}
