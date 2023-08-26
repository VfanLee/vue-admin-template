<script setup>
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <div class="action-btn" @click="appStore.changeRefresh">
    <i class="fa-solid fa-rotate"></i>
  </div>
</template>
