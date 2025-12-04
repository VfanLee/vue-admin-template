<template>
  <Editor class="tinymce-editor" api-key="no-api-key" licenseKey="gpl" tinymce-script-src="/libs/tinymce/tinymce.min.js" :init="init" v-model="model" />
</template>

<script setup lang="ts">
  import Editor from '@tinymce/tinymce-vue'

  const props = withDefaults(
    defineProps<{
      modelValue?: string
      disabled?: boolean
      readonly?: boolean
    }>(),
    {
      modelValue: '',
      disabled: false,
      readonly: false,
    },
  )
  const emit = defineEmits<{ 'update:modelValue': [string] }>()

  const model = computed({
    get() {
      return props.modelValue
    },
    set(newVal) {
      emit('update:modelValue', newVal)
    },
  })

  const init = {
    language: 'zh-CN',
    promotion: false,
    branding: false,
    plugins: [
      'accordion',
      'advlist',
      'anchor',
      'autolink',
      'autoresize',
      'autosave',
      'charmap',
      'code',
      'codesample',
      'directionality',
      'emoticons',
      'fullscreen',
      'help',
      'image',
      'importcss',
      'insertdatetime',
      'link',
      'lists',
      'media',
      'nonbreaking',
      'pagebreak',
      'preview',
      'quickbars',
      'save',
      'searchreplace',
      'table',
      'visualblocks',
      'visualchars',
      'wordcount',
      /* Premium plugins for demo purposes only */
      'mediaembed',
    ],
    menubar: ['file edit view insert format tools table help'],
    toolbar: [
      'undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl',
    ],
    font_size_formats: '12px 14px 16px 18px 20px 24px 28px 32px 36px 48px',
  }
</script>
