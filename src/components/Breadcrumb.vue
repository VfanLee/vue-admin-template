<script setup>
import { useRoute } from 'vue-router'
import { getI18nTitle } from '@/utils/lang'

const route = useRoute()

const breadcrumbRoutes = ref([])
const filterBreadcrumb = () => {
  breadcrumbRoutes.value = route.matched.filter(route => route.meta && route.meta.title)
}

watch(
  route,
  () => {
    filterBreadcrumb()
  },
  { immediate: true }
)
</script>

<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="(route, index) of breadcrumbRoutes" :key="route.path">
        <el-breadcrumb-item v-if="!route.meta.hideBreadcrumb">
          <span v-if="index === breadcrumbRoutes.length - 1">{{ getI18nTitle(route.meta.title) }}</span>
          <RouterLink :to="route.path" v-else>{{ getI18nTitle(route.meta.title) }}</RouterLink>
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss">
.breadcrumb {
  display: flex;
  gap: 10px;
  i[class*='fa-'] {
    font-size: 12px;
  }
}
</style>
