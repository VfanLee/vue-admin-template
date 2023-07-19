<script setup>
import {} from 'vue'
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar/index.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="l-layout-two">
    <Sidebar />
    <div class="l-main">
      <Navbar />
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
