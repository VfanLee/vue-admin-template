<script setup>
import { ref } from 'vue'

const c = ref(0)
const f = ref(32)

const setC = e => {
  const value = +e.target.value
  c.value = value
  f.value = value * (9 / 5) + 32
}

const setF = e => {
  const value = +e.target.value
  f.value = value
  c.value = (value - 32) * (5 / 9)
}
</script>

<template>
  <div class="view-GUIs">
    <p>
      Challenge 2：
      <a href="https://eugenkiss.github.io/7guis/tasks/#temp" target="_blank">Temperature Converter</a>
    </p>

    <input type="number" :value="c" @change="setC" />
    <span>Celsius =</span>
    <input type="number" :value="f" @change="setF" />
    <span>Fahrenheit</span>
  </div>
</template>
