/**
 * 判断对象或数组是否为空值
 * @param {Object|Array} data 对象或数组
 * @returns {Boolean}
 */
export function isNull(data) {
  if (!data || JSON.stringify(data) === '{}' || JSON.stringify(data) === '[]') {
    return true
  } else {
    return false
  }
}

/**
 * 判断是否是一个空对象
 * @param {Object} obj 对象
 * @returns {Boolean}
 */
export function isEmptyObject(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false
    }
  }
  return true
}

/**
 * 判断是否是一个空数组
 * @param {Array} arr 数组
 * @returns {Boolean}
 */
export function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0
}
