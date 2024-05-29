<script>
export default {
  name: 'Tinymce'
}
</script>

<script setup>
import { ref } from 'vue'
import Editor from '@tinymce/tinymce-vue'
import { API_KEY, defaultConfig } from './config'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  config: {
    type: Object,
    default: () => ({})
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const value = ref(props.modelValue)
const init = ref({
  ...defaultConfig,
  ...props.config
})
</script>

<template>
  <div class="tinymce-container">
    <Editor 
      :modelValue="value"
      @update:modelValue="value => $emit('update:modelValue', value)"
      :api-key="API_KEY"
      :init="init"
      :disabled="disabled"
      @change="(event, editor) => $emit('change', event, editor)"
    />
  </div>
</template>

<style>
.tinymce-container > textarea {
  display: none;
}
</style>
