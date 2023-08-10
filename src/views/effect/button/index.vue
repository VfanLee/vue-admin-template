<script setup>
import Example1 from './Example1.vue'
</script>

<template>
  <div class="view-effect-button">
    <Example1 />
  </div>
</template>

<style lang="scss" scoped>
.view-effect-button {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;

  .button__item {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
  }
}
</style>
