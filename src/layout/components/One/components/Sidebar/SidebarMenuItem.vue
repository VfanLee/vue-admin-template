<script setup>
defineProps({
  route: Object,
  require: true
})
</script>

<template>
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <SvgIcon :name="route.meta.icon" v-if="route.meta.icon" />
      <span>{{ route.meta.title }}</span>
    </template>
    <SidebarMenuItem v-for="routeChild of route.children" :key="routeChild.path" :route="routeChild"></SidebarMenuItem>
  </el-sub-menu>

  <el-menu-item v-else :index="route.path">
    <SvgIcon :name="route.meta.icon" v-if="route.meta.icon" />
    <template #title>
      <span>{{ route.meta.title }}</span>
    </template>
  </el-menu-item>
</template>

<style lang="scss" scoped>
.svg-icon {
  margin-right: 12px;
  font-size: 14px;
}
</style>
