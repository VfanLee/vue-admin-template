<script setup>
import { ref } from 'vue'

const topHeight = ref(60)
const toggleTopHeight = () => {
  if (topHeight.value === 60) {
    topHeight.value = 0
  } else {
    topHeight.value = 60
  }
}
</script>

<template>
  <div class="l-top-bottom">
    <section class="l-top-bottom__top">
      <div>top</div>
    </section>
    <main class="l-top-bottom__bottom">
      <div>bottom</div>
      <el-button @click="toggleTopHeight">Toggle</el-button>
    </main>
  </div>
</template>

<style lang="scss" scoped>
$bar-color: #c3e6fc;
$main-color: #ebdcfc;
$extra-color: #dff6c3;

.l-top-bottom {
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100vw;
  height: 100vh;
  padding: 0;

  &__top {
    height: calc(v-bind(topHeight) * 1px);
    flex-shrink: 0;
    background-color: $bar-color;
    transition: height 0.3s;
  }

  &__bottom {
    flex: 1;
    /*这个设置很重要 */
    height: 0;
    background-color: $main-color;
  }
}
</style>
