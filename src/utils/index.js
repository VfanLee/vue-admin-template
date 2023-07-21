/**
 * 判断数据是否为空值
 */
export const isNull = data => {
  if (!data || JSON.stringify(data) === '{}' || JSON.stringify(data) === '[]') {
    return true
  } else {
    return false
  }
}
