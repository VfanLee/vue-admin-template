<script setup>
import '@/styles/layout.scss'
import GlobalHeader from './GlobalHeader/index.vue'
import GlobalFooter from './GlobalFooter/index.vue'
</script>

<template>
  <div class="vat-layout-bg"></div>
  <div class="vat-layout">
    <div class="vat-sider"></div>
    <aside class="vat-sider vat-sider--fixed">sider</aside>
    <div class="vat-container">
      <div class="vat-header"></div>
      <header class="vat-header vat-header--fixed">
        <GlobalHeader />
      </header>
      <main class="vat-content">
        <RouterView></RouterView>
      </main>
      <footer class="vat-footer">
        <GlobalFooter />
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  background-image: linear-gradient(#ff0, #0ff);
}
</style>
