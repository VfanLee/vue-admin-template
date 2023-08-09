<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const $route = useRoute()

const breadcrumbRoutes = ref([])
const filterBreadcrumb = () => {
  breadcrumbRoutes.value = $route.matched.filter(route => route.meta && route.meta.title)
}

watch(
  $route,
  () => {
    filterBreadcrumb()
  },
  {
    immediate: true
  }
)
</script>

<template>
  <el-breadcrumb separator=">">
    <template v-for="(route, index) of breadcrumbRoutes" :key="route.path">
      <el-breadcrumb-item v-if="!route.meta.hideBreadcrumb">
        <span v-if="index === breadcrumbRoutes.length - 1">{{ route.meta.title }}</span>
        <RouterLink :to="route.path" v-else>{{ route.meta.title }}</RouterLink>
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<style lang="scss" scoped></style>
