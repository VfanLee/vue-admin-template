<script setup>
import { ref, reactive, computed, watch } from 'vue'

const names = reactive(['Emil, Hans', 'Mustermann, Max', 'Tisch, Roman'])
const selected = ref('')
const prefix = ref('')
const first = ref('')
const last = ref('')

const filteredNames = computed(() => names.filter(n => n.toLowerCase().startsWith(prefix.value.toLowerCase())))

watch(selected, (newVal, oldVal) => {
  ;[first.value, last.value] = newVal.split(', ')
})

const validInput = () => {
  return first.value.trim() && last.value.trim()
}

const create = () => {
  if (validInput()) {
    const fullName = `${last.value}, ${first.value}`
    if (!names.includes(fullName)) {
      names.push(fullName)
      first.value = last.value = ''
    }
  }
}

const update = () => {
  if (validInput() && selected.value) {
    const idx = names.indexOf(selected.value)
    names[idx] = selected.value = `${last.value}, ${first.value}`
  }
}

const del = () => {
  if (selected.value) {
    const idx = names.indexOf(selected.value)
    names.splice(idx, 1)
    last.value = first.value = ''
  }
}
</script>

<template>
  <div class="view-GUIs">
    <p>
      Challenge 5：
      <a href="https://eugenkiss.github.io/7guis/tasks/#crud" target="_blank">CRUD</a>
    </p>

    <div>
      <input type="text" v-model="prefix" placeholder="Filter prefix" />
    </div>

    <select size="5" v-model="selected">
      <option v-for="name of filteredNames" :key="name">{{ name }}</option>
    </select>

    <label>
      Name:
      <input type="text" v-model="first" />
    </label>

    <label>
      Surname:
      <input type="text" v-model="last" />
    </label>

    <div class="buttons">
      <button @click="create">create</button>
      <button @click="update">update</button>
      <button @click="del">delete</button>
    </div>
  </div>
</template>
