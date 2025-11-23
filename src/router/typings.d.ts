import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    roles?: string[] // 控制可以访问该页面的角色
    requiresAuth: boolean // 是否需要登录才能访问当前页面（每个路由必须声明）
    icon?: string // 在侧边菜单显示的图标
    title?: string // 在侧边菜单和标签页显示的标题
    hideInMenu?: boolean // 若为 true，则不在侧边菜单中显示
    hideChildrenInMenu?: boolean // 若为 true，则不在侧边菜单中显示该路由的子路由
    activeMenu?: string // 若设置名称，则菜单会按照该名称高亮
    order?: number // 路由菜单项排序（值越大越靠前）。注：菜单生成处的排序实现为升序（可在 `use-menu-tree.ts` 中查看）
    noAffix?: boolean // 若为 true，标签不会被固定在标签栏
    ignoreCache?: boolean // 若为 true，该页面不会被缓存
  }
}
