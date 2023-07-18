<script setup>
import {} from 'vue'
import { useRouter } from 'vue-router'

const $router = useRouter()

const props = defineProps({
  routes: {
    type: Array,
    default: () => []
  }
})
const goRoute = a => {
  $router.push(a.index)
}
</script>

<template>
  <template v-for="route of routes" :key="route.path">
    <template v-if="!route.children">
      <el-menu-item :index="route.path" @click="goRoute">{{ route.meta.title }} - {{ route.path }}</el-menu-item>
    </template>

    <template v-if="route.children && route.children.length === 1">
      <el-menu-item :index="route.children[0].path" @click="goRoute">{{ route.children[0].meta.title }}- {{ route.path }}</el-menu-item>
    </template>

    <template v-if="route.children && route.children.length > 1">
      <el-sub-menu :index="route.path">
        <template #title>{{ route.meta.title }}</template>
        <SubMenu :routes="route.children" />
      </el-sub-menu>
    </template>
  </template>
</template>

<style lang="scss" scoped></style>
