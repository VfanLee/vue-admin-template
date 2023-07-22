<script setup>
import { defineProps } from 'vue'

defineProps({
  route: Object,
  require: true
})
</script>

<template>
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <SvgIcon :name="route.meta.icon" v-if="route.meta.icon" />
      {{ route.meta.title }}
    </template>
    <SidebarMenuItem v-for="routeChild of route.children" :key="routeChild.path" :route="routeChild"></SidebarMenuItem>
  </el-sub-menu>

  <el-menu-item v-else :index="route.path">
    <template #title>
      <SvgIcon :name="route.meta.icon" v-if="route.meta.icon" />
      {{ route.meta.title }}
    </template>
  </el-menu-item>
</template>

<style lang="scss" scoped>
.el-menu-item {
  margin: 0 10px 5px;
  height: 50px;
  border-radius: 8px;

  &.is-active {
    color: #fff;
    background-color: $primary-color;
  }
}

:deep(.el-sub-menu__title) {
  margin: 0 10px 5px;
  height: 50px;

  &:hover {
    border-radius: 8px;
  }
}

.svg-icon {
  margin-right: 12px;
  font-size: 14px;
}
</style>
