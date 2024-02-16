import { resolve } from 'path-browserify'

/**
 * 使用 meta.code 根据菜单 code 判断用户是否有路由访问权限
 * @param {string} menuCode 菜单 code
 * @param {any} route 路由对象
 */
function hasPermission(route, menuCode) {
  if (route.meta && route.meta.code) {
    return menuCode.includes(route.meta.code)
  } else {
    return true
  }
}

/**
 * 根据角色过滤异步路由表，来生成动态路由表
 * @param {any[]} routes 异步路由表
 * @param {string} menuCode 菜单 code
 * @returns {any[]}
 */
export function filterAsyncRoutes(routes, menuCode) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(tmp, menuCode)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, menuCode)
      }
      res.push(tmp)
    }
  })

  return res
}

/**
 * 生成路由菜单
 * @param {any[]} routes 路由表
 * @param {string} basePath 基础路径
 * @returns {any[]}
 */
export function generateRouteMenus(routes, basePath = '/') {
  return routes
    .filter(route => !route.hidden)
    .map(route => {
      const modifiedRoute = {
        ...route,
        path: resolve(basePath, route.path),
        children: route.children || [],
        meta: route.meta || {}
      }

      if (modifiedRoute.children.length > 0) {
        modifiedRoute.children = generateRouteMenus(modifiedRoute.children, modifiedRoute.path)
      }

      return modifiedRoute
    })
}
