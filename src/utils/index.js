/**
 * 判断数据是否为空值
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
 * @param {*} obj
 * @returns
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
 * @param {*} arr
 * @returns
 */
export function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0
}
