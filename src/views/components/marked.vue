<!-- https://github.com/markedjs/marked -->
<script setup>
import { marked } from 'marked'
import { nextTick } from 'vue'

const inputText = ref(`# Markdown`)

const markdownRef = ref()
watch(inputText, (val, oldVal) => {
  markdownRef.value.innerHTML = marked.parse(inputText.value)
})

nextTick(() => {
  markdownRef.value.innerHTML = marked.parse(inputText.value)
})
</script>

<template>
  <div class="example-page">
    <el-input class="markdown__input" v-model="inputText" type="textarea" />
    <div class="markdown__view" ref="markdownRef"></div>
  </div>
</template>

<style lang="scss" scoped>
.example-page {
  display: flex;
  gap: 20px;
  overflow: auto;
  height: 100%;

  .markdown__input {
    flex: 1;
    height: 100%;

    :deep(.el-textarea__inner) {
      width: 100%;
      height: 100%;
    }
  }

  .markdown__view {
    flex: 1;
    padding: 0 16px;
    overflow: auto;
    background-color: #fff;
    border-radius: 8px;
  }
}
</style>
