<script setup>
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <el-menu-item v-if="route.meta.alwaysShow" :index="route.path">
    <SvgIcon :name="route.meta.icon" v-if="route.meta.icon" />
    <template #title>
      <span>{{ route.meta.title }}</span>
    </template>
  </el-menu-item>

  <el-sub-menu v-else-if="route.children.length > 1" :index="route.path">
    <template #title>
      <SvgIcon :name="route.meta.icon" v-if="route.meta.icon" />
      <span>{{ route.meta.title }}</span>
    </template>
    <SidebarMenuItem v-for="routeChild of route.children" :key="routeChild.path" :route="routeChild"></SidebarMenuItem>
  </el-sub-menu>

  <el-menu-item v-else-if="route.children.length === 1" :index="route.children[0].path">
    <SvgIcon :name="route.children[0].meta.icon" v-if="route.children[0].meta.icon" />
    <template #title>
      <span>{{ route.children[0].meta.title }}</span>
    </template>
  </el-menu-item>

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
