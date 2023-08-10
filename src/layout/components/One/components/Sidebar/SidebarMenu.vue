<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import SidebarMenuItem from './SidebarMenuItem.vue'
import { filterRoutes, generateMenus } from '@/utils/route'
import useAppStore from '@/store/modules/app'

const $router = useRouter()
const appStore = useAppStore()
const routes = computed(() => generateMenus(filterRoutes($router.getRoutes())))

// console.log('getRoutes(): ', $router.getRoutes())
// console.log('filterRoutes(): ', filterRoutes($router.getRoutes()))
// console.log('generateMenus(): ', generateMenus(filterRoutes($router.getRoutes())))
</script>

<template>
  <el-menu router :default-active="$route.meta.activeMenu || $route.path" :collapse="appStore.collapseSidebar" :collapse-transition="true">
    <SidebarMenuItem v-for="route of routes" :key="route.path" :route="route" />
  </el-menu>
</template>
