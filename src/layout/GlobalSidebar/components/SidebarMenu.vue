<script setup>
import useAppStore from '@/stores/app'
import usePermissionStore from '@/stores/permission'
import { generateRouteMenus } from '@/utils/route'

import SidebarMenuItem from './SidebarMenuItem.vue'

const appStore = useAppStore()
const permissionStore = usePermissionStore()

const routeMenus = computed(() => generateRouteMenus(permissionStore.routes))
</script>

<template>
  <el-menu class="sidebar-menu" router :default-active="$route.fullPath" :collapse="appStore.isCollapse" :collapse-transition="false">
    <SidebarMenuItem v-for="menuItem in routeMenus" :key="menuItem.path" :item="menuItem" />
  </el-menu>
</template>

<style lang="scss">
.sidebar-menu {
  --el-menu-bg-color: transparent;
  --el-menu-hover-bg-color: rgba(0, 0, 0, 0.03);
  --el-menu-active-bg-color: rgba(0, 0, 0, 0.15);
  --el-menu-is-active-bg-color: rgba(0, 0, 0, 0.03);
  --el-menu-text-color: rgba(0, 0, 0, 0.65);
  --el-menu-active-color: rgba(0, 0, 0, 0.95);
  --el-menu-item-height: 40px;
  --el-menu-sub-item-height: 40px;
  border-right: none;
  user-select: none;
  .svg-icon {
    margin-inline-end: 8px;
    width: var(--el-menu-icon-width);
    font-size: 16px;
  }
  .el-sub-menu {
    .el-sub-menu__title {
      &:active {
        background-color: var(--el-menu-active-bg-color);
      }
    }
    &.is-active {
      > .el-sub-menu__title {
        color: var(--el-menu-active-color);
      }
    }
  }
  .el-sub-menu__title {
    margin-block: 4px;
    margin-inline: 4px;
    border-radius: 6px;
  }
  .el-menu-item {
    margin-block: 4px;
    margin-inline: 4px;
    border-radius: 6px;
    &:active {
      background-color: var(--el-menu-active-bg-color);
    }
    &.is-active {
      background-color: var(--el-menu-is-active-bg-color);
    }
  }
  .el-menu--inline {
    padding-inline-start: 10px;
  }
}
</style>
