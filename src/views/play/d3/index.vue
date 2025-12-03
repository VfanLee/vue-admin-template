<template>
  <div class="general-container">
    <Breadcrumb :items="['演练场', 'D3.js']" />
    <a-card class="general-card" title="D3.js">
      <a-grid :cols="2">
        <a-grid-item>
          <Demo />
        </a-grid-item>
        <a-grid-item>
          <D3Axis />
        </a-grid-item>
      </a-grid>
    </a-card>
  </div>
</template>

<script setup lang="ts">
  import Demo from './components/demo.vue'
  import D3Axis from './components/d3-axis.vue'
</script>

<style lang="less"></style>
