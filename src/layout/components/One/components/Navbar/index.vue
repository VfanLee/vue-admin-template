<script setup>
import useAppStore from '@/store/modules/app'
import Breadcrumb from '@/layout/components/Breadcrumb.vue'
import UserInfo from '@/components/UserInfo.vue'

const appStore = useAppStore()

const collapseSidebar = () => {
  console.log(appStore.sidebarIsCollapse)
  // appStore.collapseSidebar(!appStore.sidebarIsCollapse)
}
</script>

<template>
  <div class="l-navbar">
    <div class="navbar__left">
      <button class="collapse__btn" @click="collapseSidebar">
        <!-- <i class="fa-solid fa-indent"></i> -->
      </button>
      <Breadcrumb />
    </div>
    <div class="navbar__right">
      <UserInfo />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.l-navbar {
  display: flex;
  align-items: center;
  padding-right: 20px;
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
}
</style>
