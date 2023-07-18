<script setup>
import {} from 'vue'
import Sidebar from './components/Sidebar/index.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="l-layout-two">
    <!--  -->
    <div class="l-sidebar">
      <div class="c-logo"></div>
      <Sidebar />
    </div>

    <!--  -->
    <div class="l-main">
      <!--  -->
      <div class="l-navbar">
        <div class="c-navbar"></div>
        <div class="c-tags-view"></div>
      </div>

      <!--  -->
      <div class="app-main">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.l-layout-two {
  display: flex;
  height: 100vh;

  .l-sidebar {
    width: 266px;

    .c-logo {
      height: 60px;
    }
  }

  .l-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 0;

    .l-navbar {
      .c-navbar {
        height: 60px;
      }

      .c-tags-view {
        height: 50px;
      }
    }

    .app-main {
      flex: 1;
      height: 0;
    }
  }
}
</style>
