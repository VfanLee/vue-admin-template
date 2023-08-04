<script setup>
import WangEditor from '@/components/WangEditor.vue'
import { ref } from 'vue'

const textValue = ref('')
</script>

<template>
  <div class="c-wang-editor">
    <h2>WangEditor</h2>
    <p>
      参考：
      <a href="https://www.wangeditor.com/v5" target="blank">wangEditor</a>
    </p>

    <div class="preview">
      <WangEditor v-model="textValue" height="500px" />
      <div class="rich-text__preview" v-html="textValue"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preview {
  display: flex;
  gap: 40px;

  .w-editor {
    flex: 1;
  }

  .rich-text__preview {
    flex: 1;
    border: 1px solid var(--el-border-color);
    background-color: #fff;
  }
}
</style>
