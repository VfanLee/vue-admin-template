<script setup>
import { ref, onUnmounted, computed } from 'vue'

const duration = ref(5 * 1000)
const elapsed = ref(0)

const progressValue = computed(() => elapsed.value / duration.value)

let lastTime
let handle

const update = () => {
  elapsed.value = Date.now() - lastTime

  if (elapsed.value >= duration.value) {
    cancelAnimationFrame(handle)
  } else {
    handle = requestAnimationFrame(update)
  }
}

const reset = () => {
  lastTime = Date.now()
  elapsed.value = 0
  update()
}

reset()

onUnmounted(() => cancelAnimationFrame(handle))
</script>

<template>
  <div class="view-GUIs">
    <p>
      Challenge 4：
      <a href="https://eugenkiss.github.io/7guis/tasks/#timer" target="_blank">Timer</a>
    </p>

    <div>
      Elapsed：
      <progress :value="progressValue"></progress>
      {{ (elapsed / 1000).toFixed(1) }}s
    </div>

    <div>
      Duration:
      <input type="range" v-model="duration" :min="1 * 1000" :max="10 * 1000" />
      {{ (duration / 1000).toFixed(1) }}s
    </div>

    <button @click="reset()">reset</button>
  </div>
</template>
