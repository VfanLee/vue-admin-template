<script setup>
import { ref } from 'vue'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()

const layoutVisible = ref(false)
</script>

<template>
  <div class="layout-setting" @click="layoutVisible = true">
    <i class="fa-solid fa-sliders"></i>

    <Teleport to="body">
      <el-drawer v-model="layoutVisible" title="布局设置" size="20%">
        <ul class="layout__list">
          <li class="layout__list-item">
            <div>固定 Sidebar</div>
            <div>
              <el-switch :modelValue="appStore.isFixedSidebar" @click="appStore.fixedSidebar"></el-switch>
            </div>
          </li>
          <li class="layout__list-item">
            <div>固定 navbar</div>
            <div>
              <el-switch :modelValue="appStore.isFixedNavbar" @click="appStore.fixedNavbar"></el-switch>
            </div>
          </li>
        </ul>
      </el-drawer>
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
.layout__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.layout__list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
}
</style>
