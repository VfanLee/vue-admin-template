<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="view-GUIs">
    <p>
      Challenge 1：
      <a href="https://eugenkiss.github.io/7guis/tasks/#counter" target="_blank">Counter</a>
    </p>

    <span>{{ count }}</span>
    <button @click="count++">Count</button>
  </div>
</template>
