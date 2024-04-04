<script setup>
import '@/styles/layout.scss'
import GlobalHeader from './GlobalHeader/index.vue'
import GlobalFooter from './GlobalFooter/index.vue'
import GlobalSidebar from './GlobalSidebar/index.vue'
import GlobalContent from './GlobalContent/index.vue'
</script>

<template>
  <div class="vat-layout-bg"></div>
  <div class="vat-layout">
    <div class="vat-sidebar"></div>
    <aside class="vat-sidebar vat-sidebar--fixed">
      <GlobalSidebar />
    </aside>
    <div class="vat-container">
      <div class="vat-header"></div>
      <header class="vat-header vat-header--fixed">
        <GlobalHeader />
      </header>
      <main class="vat-content">
        <GlobalContent />
      </main>
      <footer class="vat-footer">
        <GlobalFooter />
      </footer>
    </div>
  </div>
</template>
