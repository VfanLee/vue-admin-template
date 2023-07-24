<script setup>
import useAppStore from '@/store/modules/app'
import Breadcrumb from '@/layout/components/Breadcrumb.vue'
import UserInfo from '@/layout/components/UserInfo.vue'

const appStore = useAppStore()

const collapseSidebar = () => {
  console.log(appStore.sidebarIsCollapse)
  // appStore.collapseSidebar(!appStore.sidebarIsCollapse)
}
</script>

<template>
  <div class="l-navbar">
    <div class="c-navbar">
      <div class="navbar__left">
        <button class="collapse__btn" @click="collapseSidebar">
          <i class="fa-solid fa-indent"></i>
        </button>
        <Breadcrumb />
      </div>
      <div class="navbar__right">
        <UserInfo />
      </div>
    </div>
    <div class="c-tags-view" v-if="appStore.tagsView">tags-view</div>
  </div>
</template>

<style lang="scss" scoped>
.c-navbar {
  display: flex;
  align-items: center;
  padding-right: 20px;
  border-bottom: 1px solid var(--el-border-color);
  background-color: #fff;

  .navbar__left {
    flex: 1;
    display: flex;
    align-items: center;
    height: 100%;

    .collapse__btn {
      width: 60px;
      height: 100%;
      padding: 0;
      background-color: #fff;
      border: none;
      cursor: pointer;
    }

    .el-breadcrumb {
      flex: 1;
    }
  }

  .navbar__right {
  }
}

.c-tags-view {
  border-bottom: 1px solid var(--el-border-color);
  background-color: #fff;
}
</style>
