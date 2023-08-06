<script setup>
import { ref } from 'vue'
import ObjectSelector from '@/components/ObjectSelector.vue'

const visible = ref(false)
const value = ref(['bbb'])
const data = ref([
  {
    id: 'aaa',
    name: 'AAA'
  },
  {
    id: 'bbb',
    name: 'BBB'
  },
  {
    id: 'ccc',
    name: 'CCC'
  }
])
</script>

<template>
  <div class="c-object-selector">
    <p>value: {{ value }}</p>
    <el-button type="primary" @click="visible = true">Click</el-button>
    <ObjectSelector type="checkbox" v-model:visible="visible" v-model="value" :data="data" />
  </div>
</template>

<style lang="scss" scoped></style>
