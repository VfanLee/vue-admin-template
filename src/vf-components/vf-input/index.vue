<script setup>
defineProps({
  type: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: String,
    required: true
  },
  min: {
    type: [String, Number],
    default: ''
  },
  max: {
    type: [String, Number],
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="vf-input" v-if="type === 'text'">
    <input class="vf-input__inner" :modelValue="modelValue" @input="$emit('update:modelValue', $event.target.value)" :minlength="min" :maxlength="max" />
  </div>

  <div class="vf-textarea" v-if="type === 'textarea'">
    <textarea class="el-textarea__inner" :modelValue="modelValue" @input="$emit('update:modelValue', $event.target.value)" :minlength="min" :maxlength="max"></textarea>
  </div>
</template>
