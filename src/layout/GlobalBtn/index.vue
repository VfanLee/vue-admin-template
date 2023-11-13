<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import useAppStore from '@/store/modules/app'
import { clearCacheSettings, removeTheme, clearPrimaryColor } from '@/utils/app'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

const { t } = useI18n()
const appStore = useAppStore()

const show = ref(false)
const predefineColors = ref(['#42b883', '#646cff'])

const primaryColor = computed({
  get: () => appStore.primaryColor,
  set: value => {
    if (value) {
      ElMessageBox.confirm(t('PrimaryColorTips1'), t('changePrimaryColor'), {
        confirmButtonText: t('confirm'),
        cancelButtonText: t('cancel'),
        type: 'warning'
      })
        .then(() => {
          appStore.setPrimaryColor(value)
        })
        .catch(() => {})
    } else {
      ElMessageBox.confirm(t('PrimaryColorTips2'), t('resetPrimaryColor'), {
        confirmButtonText: t('confirm'),
        cancelButtonText: t('cancel'),
        type: 'warning'
      })
        .then(() => {
          document.documentElement.removeAttribute('style')
          appStore.setPrimaryColor(getComputedStyle(document.documentElement).getPropertyValue('--color-primary'))
          clearPrimaryColor()
        })
        .catch(() => {})
    }
  }
})
const isFixedSidebar = computed({
  get: () => appStore.isFixedSidebar,
  set: () => appStore.setSettings('isFixedSidebar', !appStore.isFixedSidebar)
})
const isFixedNavbar = computed({
  get: () => appStore.isFixedNavbar,
  set: () => appStore.setSettings('isFixedNavbar', !appStore.isFixedNavbar)
})
const isHideSidebar = computed({
  get: () => appStore.isHideSidebar,
  set: () => appStore.setSettings('isHideSidebar', !appStore.isHideSidebar)
})
const isHideNavbar = computed({
  get: () => appStore.isHideNavbar,
  set: () => appStore.setSettings('isHideNavbar', !appStore.isHideNavbar)
})
const isHideLogo = computed({
  get: () => appStore.isHideLogo,
  set: () => appStore.setSettings('isHideLogo', !appStore.isHideLogo)
})
const isHidePageFooter = computed({
  get: () => appStore.isHidePageFooter,
  set: () => appStore.setSettings('isHidePageFooter', !appStore.isHidePageFooter)
})

const resetDefaultLayout = () => {
  ElMessageBox.confirm(t('resetTips'), t('resetDefault'), {
    confirmButtonText: t('confirm'),
    cancelButtonText: t('cancel'),
    type: 'warning'
  })
    .then(() => {
      clearCacheSettings()
      removeTheme()
      clearPrimaryColor()

      location.reload()
    })
    .catch(() => {})
}
</script>

<template>
  <!-- 布局设置 -->
  <div class="global-btn">
    <button class="layout-settings-btn" @click="show = true">
      <i class="fa-solid fa-gears"></i>
    </button>
  </div>

  <!-- 布局设置  -->
  <el-drawer class="layout-drawer" v-model="show" :title="$t('layoutSettings')" direction="rtl" append-to-body>
    <el-form>
      <!-- 整体风格设置 -->
      <el-divider content-position="left">{{ $t('globalStyle') }}</el-divider>
      <!-- 暗黑模式 -->
      <el-form-item :label="$t('darkMode')">
        <ThemeSwitcher />
      </el-form-item>
      <!-- 主色调 -->
      <el-form-item :label="$t('primaryColor')">
        <el-color-picker v-model="primaryColor" :predefine="predefineColors" />
      </el-form-item>

      <!-- 导航模式 -->
      <el-divider content-position="left">{{ $t('navMode') }}</el-divider>
      <el-form-item :label="$t('fixedArea', { area: 'Sidebar' })">
        <el-switch v-model="isFixedSidebar" />
      </el-form-item>
      <el-form-item :label="$t('hideArea', { area: 'Navbar' })">
        <el-switch v-model="isFixedNavbar" />
      </el-form-item>

      <!-- 内容区域 -->
      <el-divider content-position="left">{{ $t('contentArea') }}</el-divider>
      <el-form-item :label="$t('fixedArea', { area: 'Sidebar' })">
        <el-switch v-model="isHideSidebar" />
      </el-form-item>
      <el-form-item :label="$t('hideArea', { area: 'Navbar' })">
        <el-switch v-model="isHideNavbar" />
      </el-form-item>
      <el-form-item :label="$t('hideArea', { area: 'Logo' })">
        <el-switch v-model="isHideLogo" />
      </el-form-item>
      <el-form-item :label="$t('hideArea', { area: 'Page Footer' })">
        <el-switch v-model="isHidePageFooter" />
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button @click="resetDefaultLayout">
        <template #icon>
          <i class="fa-solid fa-rotate"></i>
        </template>
        {{ $t('resetDefault') }}
      </el-button>
    </template>
  </el-drawer>
</template>

<style lang="scss" scoped>
.global-btn {
  position: fixed;
  right: 60px;
  bottom: 60px;

  .layout-settings-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 30px;
    background-color: var(--fill-color-blank);
    box-shadow: var(--box-shadow);
    font-size: 20px;
    cursor: pointer;
  }
}

.el-divider:not(:first-of-type) {
  margin-top: 48px;
}
</style>

<style lang="scss">
.layout-drawer {
  .el-drawer__header {
    margin-bottom: 0;
  }
}
</style>
