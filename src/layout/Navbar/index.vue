<script setup>
import useAppStore from '@/store/modules/app'
import RefreshAppMain from '@/components/RefreshAppMain.vue'
import FullScreen from '@/components/FullScreen.vue'
import LayoutSetting from '@/components/LayoutSetting.vue'
import UserInfo from '@/components/UserInfo.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

const appStore = useAppStore()
</script>

<template>
  <div class="l-navbar" :class="{ 'is-fixed': appStore.isFixedNavbar }">
    <div class="sidebar__collapse-btn" @click="appStore.collapseSidebar()">
      <i class="fa-solid" :class="[appStore.isCollapse ? 'fa-indent' : 'fa-outdent']"></i>
    </div>
    <Breadcrumb class="navbar__breadcrumb" />
    <RefreshAppMain class="action-btn" />
    <FullScreen class="action-btn" />
    <LayoutSetting class="action-btn" />
    <UserInfo />
  </div>
</template>

<style lang="scss" scoped>
.sidebar__collapse-btn {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 100%;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
}

.navbar__breadcrumb {
  margin-left: 10px;
  margin-right: auto;
}

.action-btn {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 8px;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    opacity: 0.66;
  }
}

:deep(.user-info__inner) {
  padding: 0 20px 0 8px;
  height: 100%;
}
</style>
