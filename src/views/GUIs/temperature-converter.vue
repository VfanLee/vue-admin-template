<script setup>
import { ref } from 'vue'

const c = ref(0)
const f = ref(32)

const setC = e => {
  const value = +c.value
  f.value = value * (9 / 5) + 32
}

const setF = e => {
  const value = +f.value
  c.value = (value - 32) * (5 / 9)
}
</script>

<template>
  <div class="view-GUIs">
    <p>
      Challenge 2：
      <a href="https://eugenkiss.github.io/7guis/tasks/#temp" target="_blank">Temperature Converter</a>
    </p>

    <input type="number" v-model="c" @change="setC" />
    <span>Celsius =</span>
    <input type="number" v-model="f" @change="setF" />
    <span>Fahrenheit</span>
  </div>
</template>
