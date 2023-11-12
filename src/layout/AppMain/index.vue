<script setup></script>

<template>
  <div class="app-main">
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" />
    </RouterView>
  </div>
</template>
