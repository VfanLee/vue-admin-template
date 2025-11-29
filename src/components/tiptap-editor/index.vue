<template>
  <EditorContent :editor="editor" />

  <!-- https://tiptap.dev/docs/editor/extensions/functionality/bubble-menu -->
  <BubbleMenu v-if="editor" :editor="editor">
    <div class="tiptap-bubble-menu">
      <button class="tiptap-btn" :class="{ active: isBold }" @click="toggleBold" title="Bold">
        <strong>B</strong>
      </button>
      <button class="tiptap-btn" :class="{ active: isItalic }" @click="toggleItalic" title="Italic">
        <em>I</em>
      </button>
    </div>
  </BubbleMenu>
</template>

<script setup lang="ts">
  import StarterKit from '@tiptap/starter-kit'
  import BubbleMenuExtension from '@tiptap/extension-bubble-menu'
  import { useEditor, EditorContent } from '@tiptap/vue-3'
  import { BubbleMenu } from '@tiptap/vue-3/menus'
  import { computed } from 'vue'

  const props = defineProps<{
    modelValue: string
  }>()

  const emit = defineEmits<{
    'update:modelValue': [value: string]
  }>()

  const editor = useEditor({
    extensions: [StarterKit, BubbleMenuExtension],
    content: props.modelValue,
    onUpdate({ editor }) {
      emit('update:modelValue', editor.getHTML())
    },
  })

  const toggleBold = () => {
    if (!editor?.value) return
    editor.value.chain().focus().toggleBold().run()
  }

  const toggleItalic = () => {
    if (!editor?.value) return
    editor.value.chain().focus().toggleItalic().run()
  }

  // Optional computed helpers, kept here for clarity/use in template
  const isBold = computed(() => !!editor?.value && editor.value.isActive('bold'))
  const isItalic = computed(() => !!editor?.value && editor.value.isActive('italic'))
</script>

<style lang="less">
  .tiptap-bubble-menu {
    display: flex;
    gap: 6px;
    align-items: center;
    background: #fff;
    padding: 6px;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(16, 24, 40, 0.08);
  }

  .tiptap-btn {
    border: none;
    background: none;
    padding: 4px 6px;
    cursor: pointer;
    border-radius: 3px;
    font-weight: 500;
  }

  .tiptap-btn:hover {
    background: rgba(16, 24, 40, 0.04);
  }

  .tiptap-btn.active {
    background: rgba(24, 144, 255, 0.12);
  }
</style>
