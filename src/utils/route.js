import { resolve } from 'path-browserify'

/**
 * 过滤路由，生成路由菜单
 * @param {*} routes
 * @param {*} basePath
 * @returns
 */
export function filterRoutes(routes, basePath = '/') {
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
        modifiedRoute.children = filterRoutes(modifiedRoute.children, modifiedRoute.path)
      }

      return modifiedRoute
    })
}
