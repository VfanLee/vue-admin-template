<template>
  <a-breadcrumb class="general-breadcrumb">
    <a-breadcrumb-item>
      <icon-apps />
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="item in props.items" :key="item">
      {{ item }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts" setup>
  interface Props {
    items?: string[]
  }
  const props = withDefaults(defineProps<Props>(), { items: () => [] })
</script>

<style lang="less">
  .general-breadcrumb {
    margin: 16px 0;
    height: 24px;
    .arco-breadcrumb-item {
      color: rgb(var(--gray-6));
      &:last-child {
        color: rgb(var(--gray-8));
      }
    }
  }
</style>
