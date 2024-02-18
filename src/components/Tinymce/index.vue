<!-- https://www.tiny.cloud/ -->
<script setup name="Tinymce">
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

const emit = defineEmits(['update:modelValue', 'init', 'change', 'blur'])

const init = ref({
  ...defaultConfig,
  ...props.config
})

const handleInit = (event, editor) => {
  console.log(`${editor.id} init!`)
  emit('init', event, editor)
}
</script>

<template>
  <div class="tinymce-container" :style="{ height: init.height + 'px' }">
    <Editor
      :modelValue="modelValue"
      @update:modelValue="value => $emit('update:modelValue', value)"
      :api-key="API_KEY"
      :init="init"
      :disabled="disabled"
      @init="handleInit"
      @change="(event, editor) => $emit('change', event, editor)"
      @blur="(event, editor) => $emit('blur', event, editor)"
    />
  </div>
</template>

<style lang="scss">
.tinymce-container {
  width: 100%;

  > textarea {
    display: none;
  }
}
</style>
