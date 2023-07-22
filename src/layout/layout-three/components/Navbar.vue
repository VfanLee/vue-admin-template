<script setup>
import {} from 'vue'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <div class="c-navbar__wrap" :class="{ 'fixed-header': appStore.fixedHeader }">
    <div class="c-navbar"></div>
    <div class="c-tags-view" v-if="appStore.tagsView"></div>
  </div>
</template>

<style lang="scss" scoped></style>
