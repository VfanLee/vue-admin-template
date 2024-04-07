<script setup>
import useAppStore from '@/stores/app'
import VatSidebar from './VatSidebar/index.vue'
import VatHeader from './VatlHeader/index.vue'
import VatContent from './VatContent/index.vue'
import VatFooter from './VatFooter/index.vue'

const appStore = useAppStore()
</script>

<template>
  <div class="vat-layout-bg"></div>
  <div class="vat-layout" :class="appStore.isCollapse ? 'is-sidebar--collapse' : ''">
    <VatSidebar />
    <div class="vat-container">
      <VatHeader />
      <VatContent />
      <VatFooter />
    </div>
  </div>
</template>

<style lang="scss">
.vat-layout {
  --sidebar-width: 257px;
  --header-height: 56px;

  &.is-sidebar--collapse {
    --sidebar-width: 65px;
  }
}

.vat-layout-bg {
  position: fixed;
  z-index: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(#fff, #f5f5f5 28%);
}

.vat-layout {
  display: flex;
  min-height: 100%;
}

.vat-sidebar {
  flex: 0 0 var(--sidebar-width);
  width: var(--sidebar-width);
  min-width: var(--sidebar-width);
  max-width: var(--sidebar-width);
  transition: 0.2s;
  &.vat-sidebar--fixed {
    position: fixed;
    inset-block-start: var(--header-height);
    inset-inline-start: 0;
    z-index: 100;
    height: calc(100% - var(--header-height));
    border-inline-end: 1px solid rgba(5, 5, 5, 0.06);
    backdrop-filter: blur(8px);
  }
}

.vat-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  min-height: 0;
  background-color: transparent;
}

.vat-header {
  overflow: hidden;
  width: 100%;
  height: var(--header-height);
  border-block-end: 1px solid rgba(5, 5, 5, 0.06);
  background-color: transparent;
  transition: 0.2s;
  &.vat-header--fixed {
    position: fixed;
    inset-block-start: 0;
    inset-inline-start: 0;
    z-index: 100;
    width: 100%;
    backdrop-filter: blur(8px);
  }
}

.vat-content {
  width: 100%;
  padding: 32px 40px;
}

.vat-footer {
  margin-block-start: 48px;
  margin-block-end: 24px;
  padding-inline: 16px;
  text-align: center;
}
</style>
