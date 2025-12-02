<template>
  <div class="general-container">
    <Breadcrumb :items="['组件', 'Tinymce 编辑器']" />
    <a-card class="general-card" title="Tinymce 编辑器">
      <TinymceEditor v-model="val" />
      <hr />
      <pre>{{ val }}</pre>
    </a-card>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import TinymceEditor from '@/components/tinymce-editor/index.vue'

  const val = ref('')
</script>
