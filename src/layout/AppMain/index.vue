<script setup>
import { ref, watch, nextTick } from 'vue'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()

const flag = ref(true)

watch(
  () => appStore.refresh,
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  }
)
</script>

<template>
  <div class="app-main">
    <RouterView v-slot="{ Component, route }" v-if="flag">
      <component :is="Component" :key="route.path" />
    </RouterView>
  </div>
</template>
