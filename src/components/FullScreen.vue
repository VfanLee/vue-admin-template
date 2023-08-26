<script setup>
const toggleFullscreen = () => {
  if (document.fullscreenEnabled) {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      document.documentElement.requestFullscreen()
    }
  } else {
    alert('您的浏览器不支持全屏模式！')
  }
}
</script>

<template>
  <div class="full-screen" @click="toggleFullscreen">
    <i class="fa-solid fa-expand"></i>
  </div>
</template>
