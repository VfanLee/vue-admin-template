<script setup>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'
</script>

<template>
  <div class="l-layout-three">
    <Sidebar />
    <el-scrollbar class="l-main">
      <Navbar />
      <AppMain />
    </el-scrollbar>
  </div>
</template>

<style lang="scss">
.l-layout-three {
  overflow: hidden;
  display: flex;
  height: 100vh;
  background: #f6f8f9;

  .l-sidebar {
    display: flex;
    flex-direction: column;
    width: 266px;

    .c-logo {
      height: 60px;
      border-right: 1px solid var(--el-border-color);
      border-bottom: 1px solid var(--el-border-color);
    }

    .c-menu__wrap {
      flex: 1;
      display: flex;
      height: 0;

      .c-menu {
        width: 64px;
        border-right: 1px solid var(--el-border-color);
        background-color: #fff;
      }

      .c-sub-menu {
        flex: 1;
        width: 0;
        border-right: 1px solid var(--el-border-color);
        background-color: #fff;
      }
    }
  }

  .l-main {
    flex: 1;
    width: 0;

    .el-scrollbar__view {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100%;

      .c-navbar__wrap {
        &.fixed-header {
          position: sticky;
          top: 0;
        }

        .c-navbar {
          height: 60px;
          border-bottom: 1px solid var(--el-border-color);
          background-color: #fff;
        }

        .c-tags-view {
          height: 50px;
          border-bottom: 1px solid var(--el-border-color);
          background-color: #fff;
        }
      }

      .app-main {
        flex: 1;
        margin: 20px;
        padding: 20px;
        height: 0;
        border: 1px solid var(--el-border-color);
        border-radius: 8px;
        background-color: #fff;
      }
    }
  }
}
</style>
