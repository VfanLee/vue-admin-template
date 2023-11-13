import { resolve } from 'path-browserify'

/**
 * 使用 meta.role 判断当前用户是否有权限
 * @param {Array} roles 角色组
 * @param {Object} route 路由对象
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 根据角色过滤异步路由表，来生成动态路由表
 * @param {Array} routes 异步路由表
 * @param {Array} roles 角色列表
 * @returns {Array}
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

/**
 * 生成路由菜单
 * @param {Array} routes 路由表
 * @param {String} basePath 基础路径
 * @returns {Array}
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
