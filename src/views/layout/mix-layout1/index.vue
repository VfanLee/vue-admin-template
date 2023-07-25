<script setup>
import {} from 'vue'
</script>

<template>
  <div class="mix-layout1">
    <!-- 外层：左右布局 -->
    <section class="sidebar"></section>
    <section class="wrap">
      <!-- 内层：上下布局 -->
      <header class="header"></header>
      <main class="main">这种布局相当于：外层为左右布局，内层为上下布局</main>
    </section>
  </div>
</template>

<style lang="scss" scoped>
$color1: #c3e6fc;
$color2: #ebdcfc;
$color3: #dff6c3;

.mix-layout1 {
  display: flex;
  width: 100vw;
  height: 100vh;

  .sidebar {
    width: 200px;
    background-color: $color1;
  }

  .wrap {
    flex: 1;
    display: flex;
    flex-direction: column;

    .header {
      height: 60px;
      background-color: $color2;
    }

    .main {
      flex: 1;
      background-color: $color3;
    }
  }
}
</style>
