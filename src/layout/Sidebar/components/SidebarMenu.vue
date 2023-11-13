<script setup>
import '@/styles/components/sidebar-menu.scss'
import { computed } from 'vue'
import useAppStore from '@/store/modules/app'
import usePermissionStore from '@/store/modules/permission'
import { generateRouteMenus } from '@/utils/route'

import SidebarMenuItem from './SidebarMenuItem.vue'

const appStore = useAppStore()
const permissionStore = usePermissionStore()

const routeMenus = computed(() => generateRouteMenus(permissionStore.routes))
console.log('路由菜单', routeMenus.value)
</script>

<template>
  <el-menu class="sidebar-menu" router :default-active="$route.fullPath" :collapse="appStore.isCollapse" :collapse-transition="false">
    <SidebarMenuItem v-for="menuItem in routeMenus" :key="menuItem.path" :item="menuItem" />
  </el-menu>
</template>
