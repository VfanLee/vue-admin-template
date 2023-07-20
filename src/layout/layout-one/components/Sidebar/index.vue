<script setup>
import { computed } from 'vue'
import Logo from './Logo.vue'
import SubMenu from './SubMenu.vue'
import { useRouter } from 'vue-router'
import { filterRoutes, generateMenus } from '@/utils/route'

const $router = useRouter()
const routes = computed(() => generateMenus(filterRoutes($router.getRoutes())))

console.log($router.getRoutes())
console.log(filterRoutes($router.getRoutes()))
console.log(generateMenus(filterRoutes($router.getRoutes())))
</script>

<template>
  <div class="l-sidebar">
    <Logo />
    <el-scrollbar>
      <el-menu router :default-active="$route.path">
        <SubMenu :routes="filterRoutes($router.getRoutes())" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-menu-item) {
  margin: 0 10px 5px;
  height: 50px;
  border-radius: 8px;

  &:hover,
  &.is-active {
    color: #fff;
    background-color: $primary-color;
  }
}

:deep(.el-sub-menu__title) {
  margin: 0 10px 5px;
  height: 50px;

  &:hover {
    background-color: transparent;
  }
}

.l-sidebar {
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--el-border-color);
}

.el-menu {
  border-right: none;
}

.el-scrollbar {
  flex: 1;
  height: 0;
}
</style>
