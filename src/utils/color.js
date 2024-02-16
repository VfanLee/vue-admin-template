export function generateRandomColor() {
  return '#' + Math.random().toString(16).slice(2, 8)
}

/**
 * 十六进制转RGB
 * @param {string} hex 十六进制
 * @returns {{r, g, b}} RGB 对象
 */
export function hexToRGB(hex) {
  // 去除可能存在的 # 符号
  hex = hex.replace(/^#/, '')

  // 将十六进制分成 R, G, B 部分
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  return { r, g, b }
}

/**
 * RGB转十六进制
 * @param {number} r Red
 * @param {number} g Green
 * @param {number} b Blue
 * @returns {string} 十六进制字符
 */
export function RGBToHex(r, g, b) {
  // 将 R, G, B 值转换为十六进制，并补齐两位
  const rHex = r.toString(16).padStart(2, '0')
  const gHex = g.toString(16).padStart(2, '0')
  const bHex = b.toString(16).padStart(2, '0')

  return `#${rHex}${gHex}${bHex}`
}

/**
 * 混合颜色
 * @param {any[]} colors 混合颜色数组
 * @param {number} ratio 混合比例：默认 1:1
 * @returns {string} 十六进制字符
 */
export function blendColors(colors, ratio = 1) {
  // 初始化混合后的颜色为黑色
  let blendedColor = { r: 0, g: 0, b: 0 }

  // 计算混合后的颜色
  for (const color of colors) {
    const colorRGB = hexToRGB(color)
    blendedColor.r += colorRGB.r
    blendedColor.g += colorRGB.g
    blendedColor.b += colorRGB.b
  }

  // 根据颜色数量和混合比例计算平均值
  const numColors = colors.length
  blendedColor.r = Math.round(blendedColor.r / numColors)
  blendedColor.g = Math.round(blendedColor.g / numColors)
  blendedColor.b = Math.round(blendedColor.b / numColors)

  // 根据混合比例调整颜色
  blendedColor.r = Math.round(blendedColor.r * ratio)
  blendedColor.g = Math.round(blendedColor.g * ratio)
  blendedColor.b = Math.round(blendedColor.b * ratio)

  return RGBToHex(blendedColor.r, blendedColor.g, blendedColor.b)
}

/**
 * 生成色板
 * @param {string} primaryColor 主色
 * @param {string} backgroundColor 底色
 * @param {number} numColors 色板阶层
 * @returns {any[]}
 */
export function generateColorPalette(primaryColor, backgroundColor, numColors = 11) {
  // 解析主色和底色
  const primaryRGB = hexToRGB(primaryColor)
  const backgroundRGB = hexToRGB(backgroundColor)

  // 计算混合颜色的步长
  const step = {
    r: (backgroundRGB.r - primaryRGB.r) / (numColors - 1),
    g: (backgroundRGB.g - primaryRGB.g) / (numColors - 1),
    b: (backgroundRGB.b - primaryRGB.b) / (numColors - 1)
  }

  // 生成调色板
  const palette = []
  for (let i = 0; i < numColors; i++) {
    const blendedColor = {
      r: Math.round(primaryRGB.r + step.r * i),
      g: Math.round(primaryRGB.g + step.g * i),
      b: Math.round(primaryRGB.b + step.b * i)
    }
    palette.push(RGBToHex(blendedColor.r, blendedColor.g, blendedColor.b))
  }

  return palette
}
