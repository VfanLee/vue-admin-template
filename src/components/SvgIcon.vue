<script setup>
import { computed } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <i class="el-icon">
    <svg class="svg-icon" aria-hidden="true" style="width: 1em; height: 1em">
      <use :xlink:href="symbolId" fill="currentColor" />
    </svg>
  </i>
</template>
