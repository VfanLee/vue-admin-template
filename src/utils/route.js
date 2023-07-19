function pathResolve(...paths) {
  // 如果没有参数，返回当前工作目录
  if (paths.length === 0) {
    return process.cwd()
  }

  // 将所有参数转换为字符串并拼接为一个路径
  let joinedPath = paths.map(String).join('/')

  // 如果路径以 '/' 开头，表示是绝对路径，否则是相对路径
  let isAbsolute = joinedPath.startsWith('/')

  // 将路径分割为数组，并过滤掉空字符串
  let segments = joinedPath.split('/').filter(Boolean)

  // 创建一个栈来存储规范化后的路径段
  let stack = []

  // 遍历路径段
  for (let segment of segments) {
    // 如果是 '.'，表示当前目录，忽略
    if (segment === '.') {
      continue
    }
    // 如果是 '..'，表示上一级目录，弹出栈顶元素
    if (segment === '..') {
      stack.pop()
    } else {
      // 否则，表示一个有效的路径段，推入栈中
      stack.push(segment)
    }
  }

  // 如果栈为空，表示路径为根目录或者当前目录
  if (stack.length === 0) {
    return isAbsolute ? '/' : '.'
  }

  // 将栈中的元素用 '/' 连接起来，如果是绝对路径，加上前缀 '/'
  return (isAbsolute ? '/' : '') + stack.join('/')
}

/**
 * 返回所有子路由
 */
const getChildrenRoutes = routes => {
  const result = []
  routes.forEach(route => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}
/**
 * 处理脱离层级的路由：某个一级路由为其他子路由，则剔除该一级路由，保留路由层级
 * @param {*} routes router.getRoutes()
 */
export const filterRoutes = routes => {
  const childrenRoutes = getChildrenRoutes(routes)
  return routes.filter(route => {
    return !childrenRoutes.find(childrenRoute => {
      return childrenRoute.path === route.path
    })
  })
}

/**
 * 判断数据是否为空值
 */
function isNull(data) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}
/**
 * 根据 routes 数据，返回对应 menu 规则数组
 */
export function generateMenus(routes, basePath = '/') {
  const result = []
  // 遍历路由表
  routes.forEach(item => {
    // 不存在 children && 不存在 meta 直接 return
    if (isNull(item.meta) && isNull(item.children)) return
    // 存在 children 不存在 meta，进入迭代
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }
    // 合并 path 作为跳转路径
    // const routePath = basePath + item.path
    const routePath = pathResolve(basePath, item.path)
    // 路由分离之后，存在同名父路由的情况，需要单独处理
    let route = result.find(item => item.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }

      // icon 与 title 必须全部存在
      if (route.meta.title) {
        // meta 存在生成 route 对象，放入 arr
        result.push(route)
      }
    }

    // 存在 children 进入迭代到children
    if (item.children) {
      route.children.push(...generateMenus(item.children, route.path))
    }
  })
  return result
}
