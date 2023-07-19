<script setup>
import {} from 'vue'
</script>

<template>
  <a class="c-logo" href="javascript:;">
    <img class="logo" src="@/assets/logo.svg" alt="logo" />
    <h1>Admin Vue</h1>
  </a>
</template>

<style lang="scss" scoped>
.c-logo {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 12px;

  img {
    width: 28px;
    height: 28px;
    margin-right: 12px;
  }

  h1 {
    flex: 1;
    margin: 0;
    width: 0;
    font-size: 24px;
  }
}
</style>
