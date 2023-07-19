<script setup>
import {} from 'vue'
import Logo from './Logo.vue'
import SubMenu from './SubMenu.vue'
import { useRoutesStore } from '@/store/modules/user'
import { useRoute } from 'vue-router'

const $route = useRoute()
const routesStore = useRoutesStore()
</script>

<template>
  <div class="l-sidebar">
    <Logo />
    <el-scrollbar>
      <el-menu router :default-active="$route.path">
        <SubMenu :routes="routesStore.renderRoutes" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.l-sidebar {
  display: flex;
  flex-direction: column;
}

.el-menu {
  border-right: none;
}

.el-scrollbar {
  flex: 1;
  height: 0;
}
</style>
