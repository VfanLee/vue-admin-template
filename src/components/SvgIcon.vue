<script setup>
import '@/styles/components/svg-icon.scss'
import { computed } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  fontSize: {
    type: String,
    default: '1em'
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <i class="svg-icon" :style="{ fontSize, color }">
    <svg aria-hidden="true" style="width: 1em; height: 1em">
      <use :xlink:href="symbolId" fill="currentColor" />
    </svg>
  </i>
</template>
