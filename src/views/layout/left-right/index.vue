<script setup>
import { ref } from 'vue'

const leftWidth = ref(200)

const toggleLeftWidth = () => {
  if (leftWidth.value === 200) {
    leftWidth.value = 60
  } else if (leftWidth.value === 60) {
    leftWidth.value = 0
  } else {
    leftWidth.value = 200
  }
}
</script>

<template>
  <div class="l-left-right">
    <section class="l-left-right__left">
      <div>left</div>
    </section>
    <main class="l-left-right__right">
      <div>right</div>
      <el-button @click="toggleLeftWidth">Toggle</el-button>
    </main>
  </div>
</template>

<style lang="scss" scoped>
$bar-color: #c3e6fc;
$main-color: #ebdcfc;
$extra-color: #dff6c3;

.l-left-right {
  display: flex;
  flex-direction: row;
  margin: 0;
  width: 100vw;
  height: 100vh;
  padding: 0;

  &__left {
    width: calc(v-bind(leftWidth) * 1px);
    flex-shrink: 0;
    background-color: $bar-color;
    transition: width 0.3s;
  }

  &__right {
    flex: 1;
    background-color: $main-color;
  }
}
</style>
