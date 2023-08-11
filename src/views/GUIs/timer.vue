<script setup>
import { ref, computed } from 'vue'

const elapsed = ref(0)
const progressRate = computed(() => elapsed.value)
const duration = ref('0')
</script>

<template>
  <div class="view-GUIs">
    <p>
      Challenge 4：
      <a href="https://eugenkiss.github.io/7guis/tasks/#timer" target="_blank">Timer</a>
    </p>

    <div>
      Elapsed Time:
      <progress :value="progressRate"></progress>
    </div>

    <div>
      Duration:
      <input type="range" v-model="duration" />
    </div>
  </div>
</template>
