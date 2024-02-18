<script setup name="tinymceView">
import Tinymce from '@/components/Tinymce/index.vue'

const value = ref('')
</script>

<template>
  <div class="example-page">
    <p>{{ value }}</p>
    <Tinymce v-model="value" />
  </div>
</template>
