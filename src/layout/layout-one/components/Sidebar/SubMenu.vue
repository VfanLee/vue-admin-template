<script setup>
import {} from 'vue'

const props = defineProps({
  routes: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <template v-for="route of routes" :key="route.path">
    <template v-if="!route.children && !route.meta.hide">
      <el-menu-item :index="route.path">{{ route.meta.title }}</el-menu-item>
    </template>

    <template v-if="route.children && route.children.length === 1 && !route.children[0].meta.hide">
      <el-menu-item :index="route.children[0].path">{{ route.children[0].meta.title }}</el-menu-item>
    </template>

    <template v-if="route.children && route.children.length > 1 && !route.meta.hide">
      <el-sub-menu :index="route.path">
        <template #title>{{ route.meta.title }}</template>
        <SubMenu :routes="route.children" />
      </el-sub-menu>
    </template>
  </template>
</template>

<style lang="scss" scoped></style>
