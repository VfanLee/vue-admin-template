<template>
  <div class="tiptap-page">
    <a-card title="Tiptap 富文本编辑器">
      <TiptapEditor v-model="content" />
    </a-card>

    <a-card>
      <pre>{{ content }}</pre>
    </a-card>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import TiptapEditor from '@/components/tiptap-editor/index.vue'

  const content = ref('')
</script>
