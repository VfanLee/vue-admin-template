<script setup>
import { ref, reactive, computed } from 'vue'
import VfInput from '@/vf-components/vf-input/index.vue'
import VfSwitch from '@/vf-components/vf-switch/index.vue'

const names = reactive(['Emil, Hans', 'Mustermann, Max', 'Tisch, Roman'])

const filteredNames = computed(() =>
  names.filter((n) =>
    n.toLowerCase().startsWith('e')
  )
)
const selected = ref('')
</script>

<template>
  <div>
    <select size="5" v-model="selected">
      <option v-for="name of filteredNames" :key="name">{{ name }}</option>
    </select>
  </div>
</template>

<style lang="scss"></style>
