<script setup>
import {} from 'vue'
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar/index.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="l-layout-two">
    <Sidebar />
    <el-scrollbar class="l-main">
      <Navbar />
      <div class="app-main">
        <div class="app-main__inner">
          <RouterView />
        </div>
        <div class="c-copy-right">Copyright © 2023 Admin Vue</div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss">
.l-layout-two {
  display: flex;
  height: 100vh;
  background-color: #f6f8f9;

  .l-sidebar {
    width: 266px;

    .c-logo {
      height: 60px;
      background-color: #fff;
    }

    .el-scrollbar {
      background-color: #fff;
    }
  }

  .l-main {
    flex: 1;
    width: 0;

    .el-scrollbar__view {
      display: flex;
      flex-direction: column;
      height: 100%;

      .l-navbar {
        position: relative;
        top: 0;
        left: 0;

        &.fixed-header {
          position: fixed;
          top: 0;
          left: calc(266px);
          width: 100%;
        }

        .c-navbar {
          height: 60px;
        }

        .c-tags-view {
          height: 50px;
        }
      }

      .app-main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 20px;

        .app-main__inner {
          flex: 1;
          height: 0;
        }

        .c-copy-right {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          height: 60px;
          font-size: 14px;
          border: 1px solid var(--el-border-color);
          border-radius: 8px;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
