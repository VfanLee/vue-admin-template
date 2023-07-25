<script setup>
import {} from 'vue'
</script>

<template>
  <div class="mix-layout2">
    <!-- 外层：上下布局 -->
    <header class="header"></header>
    <!-- 内层：左右布局 -->
    <section class="wrap">
      <section class="sidebar"></section>
      <main class="main">这种布局相当于：外层为上下布局，内层为左右布局</main>
    </section>
  </div>
</template>

<style lang="scss" scoped>
$color1: #c3e6fc;
$color2: #ebdcfc;
$color3: #dff6c3;

.mix-layout2 {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: $color1;

  .header {
    height: 60px;
  }

  .wrap {
    flex: 1;
    display: flex;

    .sidebar {
      width: 200px;
      background-color: $color2;
    }

    .main {
      flex: 1;
      background-color: $color3;
    }
  }
}
</style>
