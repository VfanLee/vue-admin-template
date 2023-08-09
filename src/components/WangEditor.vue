<script setup>
import "@/styles/components/wang-editor.scss"
import { shallowRef, onBeforeUnmount } from 'vue'
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  toolbarConfig: {
    type: Object,
    default: () => ({})
  },
  editorConfig: {
    type: Object,
    default: () => ({})
  },
  toolbarMode: {
    type: String,
    default: 'default' // 或 'simple'
  },
  editorMode: {
    type: String,
    default: 'default' // 或 'simple'
  },
  height: {
    type: String,
    default: '300px'
  }
})

defineEmits(['update:modelValue'])

const editorRef = shallowRef()

const handleCreated = editor => {
  editorRef.value = editor
}

onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
</script>

<template>
  <div class="w-editor">
    <Toolbar class="w-editor__toolbar" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="toolbarMode" />
    <Editor class="w-editor__editor" :style="{ height }" :modelValue="modelValue" @update:modelValue="val => $emit('update:modelValue', val)" :defaultConfig="editorConfig" :mode="editorMode" @onCreated="handleCreated" />
  </div>
</template>
