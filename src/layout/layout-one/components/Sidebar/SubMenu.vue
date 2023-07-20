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
    <template v-if="!route.children || route.children.length === 0">
      <el-menu-item :index="route.path">
        <template #title>
          <span>{{ route.path }}</span>
        </template>
      </el-menu-item>
    </template>

    <template v-if="route.children && route.children.length === 1">
      <el-menu-item :index="route.children[0].path">
        <template #title>
          <span>{{ route.children[0].path }}</span>
        </template>
      </el-menu-item>
    </template>

    <template v-if="route.children && route.children.length > 1">
      <el-sub-menu :index="route.path">
        <template #title>
          <span>{{ route.path }}</span>
        </template>
        <SubMenu :routes="route.children" />
      </el-sub-menu>
    </template>
  </template>
</template>

<style lang="scss" scoped></style>
