import { resolve } from 'path-browserify'

/**
 * 使用 meta.role 判断当前用户是否有权限
 * @param {string} role 角色
 * @param {any} route 路由对象
 */
function hasPermission(role, route) {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(role)
  } else {
    return true
  }
}

/**
 * 根据角色过滤异步路由表，来生成动态路由表
 * @param {any[]} routes 异步路由表
 * @param {string} role 角色
 * @returns {any[]}
 */
export function filterAsyncRoutes(routes, role) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(role, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, role)
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