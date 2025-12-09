<template>
  <div class="general-container">
    <Breadcrumb :items="['组件', 'Tiptap 编辑器']" />
    <a-card class="general-card" title="Tiptap 编辑器">
      <TiptapEditor v-model="content" />
      <hr />
      <pre>{{ content }}</pre>
    </a-card>
  </div>
</template>

<script setup lang="ts">
  import TiptapEditor from '@/components/tiptap-editor/index.vue'

  const content = ref('')
</script>
