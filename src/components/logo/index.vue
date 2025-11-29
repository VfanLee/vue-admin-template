<template>
  <div class="logo">
    <img class="logo-img" src="/logo.svg" :style="props.imgStyle" />
    <div class="logo-text" :style="props.textStyle">Vue Admin Template</div>
  </div>
</template>

<script setup lang="ts">
  import type { CSSProperties } from 'vue'

  const props = withDefaults(
    defineProps<{
      imgStyle?: CSSProperties
      textStyle?: CSSProperties
    }>(),
    {},
  )
</script>

<style scoped lang="less">
  .logo {
    display: inline-flex;
    align-items: center;
    user-select: none;

    &-text {
      margin: 0 4px;
      font-size: 18px;
      color: var(--color-text-1);
    }
  }
</style>
