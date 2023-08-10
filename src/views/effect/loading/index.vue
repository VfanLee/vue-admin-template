<script setup>
import Example1 from './Example1.vue';
</script>

<template>
  <div class="view-effect-loading">
    <Example1 />
  </div>
</template>

<style lang="scss" scoped>
.view-effect-loading {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  .loading__item {
    border: 1px solid var(--el-border-color);
    aspect-ratio: 1 / 1;
  }
}
</style>
