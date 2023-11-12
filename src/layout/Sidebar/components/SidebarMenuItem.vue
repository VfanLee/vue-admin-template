<script>
export default {
  name: 'SidebarMenuItem'
}
</script>

<script setup>
import { getI18nTitle } from '@/utils/lang'

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <a :href="item.path" v-if="item.link">{{ getI18nTitle(item.meta.title) }}</a>

  <el-menu-item v-else-if="item.children.length === 1 && !item.alwaysShow" :index="item.children[0].path">
    <SvgIcon :name="item.children[0].meta.icon" v-if="item.children[0].meta.icon" />
    <span>{{ getI18nTitle(item.children[0].meta.title) }}</span>
  </el-menu-item>

  <el-sub-menu v-else-if="item.children.length >= 1" :index="item.path">
    <template #title>
      <SvgIcon :name="item.meta.icon" v-if="item.meta.icon" />
      <span>{{ getI18nTitle(item.meta.title) }}</span>
    </template>
    <SidebarMenuItem v-for="routeChild of item.children" :key="routeChild.path" :item="routeChild"></SidebarMenuItem>
  </el-sub-menu>

  <el-menu-item v-else :index="item.path" :data-path="item.path">
    <SvgIcon :name="item.meta.icon" v-if="item.meta.icon" />
    <span>{{ getI18nTitle(item.meta.title) }}</span>
  </el-menu-item>
</template>
