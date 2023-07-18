<script setup>
import {} from 'vue'
import SubMenu from './SubMenu.vue'
import { useRoutesStore } from '@/store/modules/user'

const routesStore = useRoutesStore()
</script>

<template>
  <el-scrollbar>
    <el-menu>
      <SubMenu :routes="routesStore.renderRoutes" />
    </el-menu>
  </el-scrollbar>
</template>

<style lang="scss" scoped></style>
