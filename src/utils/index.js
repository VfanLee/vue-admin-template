/**
 * 判断对象或数组是否为空值
 * @param {any|any[]} data 对象或数组
 * @returns {boolean}
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
 * @param {any} obj 对象
 * @returns {boolean}
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
 * @param {any[]} arr 数组
 * @returns {boolean}
 */
export function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0
}
