<template>
  <div class="general-container">
    <Breadcrumb :items="['演练场', 'Fabric.js']" />
    <a-card class="general-card" title="Fabric.js">
      <a-row :gutter="32" justify="center">
        <a-col :span="12">
          <a-form layout="vertical" :model="formModel">
            <!-- 背景设置 -->
            <a-form-item label="背景颜色">
              <a-input v-model="formModel.bgColor" type="color" @change="onBgColorChange" />
            </a-form-item>
            <a-form-item label="背景图片">
              <a-upload :auto-upload="false" :show-file-list="false" accept="image/*" @change="onBgImageChange">
                <template #upload-button>
                  <a-button>选择图片</a-button>
                </template>
              </a-upload>
              <a-button style="margin-left: 8px" @click="onClearBgImage">清除背景图</a-button>
            </a-form-item>

            <a-divider />

            <!-- 文字操作 -->
            <a-form-item label="添加文字">
              <a-space>
                <a-input v-model="formModel.newText" placeholder="输入文字内容" />
                <a-button type="primary" @click="onAddText">添加</a-button>
              </a-space>
            </a-form-item>

            <!-- 选中文字的属性 -->
            <template v-if="selectedText">
              <a-divider>选中文字属性</a-divider>
              <a-form-item label="字体大小">
                <a-slider v-model="selectedText.fontSize" :min="12" :max="100" @change="onTextPropertyChange" />
              </a-form-item>
              <a-form-item label="字体颜色">
                <a-input v-model="selectedText.fill" type="color" @change="onTextPropertyChange" />
              </a-form-item>
              <a-form-item>
                <a-button status="danger" @click="onDeleteText">删除选中文字</a-button>
              </a-form-item>
            </template>

            <a-divider />

            <a-form-item label="导出">
              <a-button type="primary" @click="onExport">导出图片</a-button>
            </a-form-item>
          </a-form>
        </a-col>
        <a-col style="display: flex; justify-content: center" :span="12">
          <Box ref="boxRef" @selection-change="onSelectionChange" />
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script setup lang="ts">
  import Breadcrumb from '@/components/breadcrumb/index.vue'
  import Box from './components/box.vue'
  import type { FileItem } from '@arco-design/web-vue'

  const formModel = reactive({
    bgColor: '#ffffff',
    newText: '',
  })

  const selectedText = ref<{ fontSize: number; fill: string } | null>(null)

  const boxRef = useTemplateRef('boxRef')

  // 背景颜色变化
  const onBgColorChange = () => {
    boxRef.value?.setBackgroundColor(formModel.bgColor)
  }

  // 背景图片变化
  const onBgImageChange = (_fileList: FileItem[], fileItem: FileItem) => {
    if (fileItem.file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string
        boxRef.value?.setBackgroundImage(dataUrl)
      }
      reader.readAsDataURL(fileItem.file)
    }
  }

  // 清除背景图
  const onClearBgImage = () => {
    boxRef.value?.clearBackgroundImage()
  }

  // 添加文字
  const onAddText = () => {
    if (formModel.newText.trim()) {
      boxRef.value?.addText(formModel.newText)
      formModel.newText = ''
    }
  }

  // 选中变化
  const onSelectionChange = (textProps: { fontSize: number; fill: string } | null) => {
    selectedText.value = textProps
  }

  // 文字属性变化
  const onTextPropertyChange = () => {
    if (selectedText.value) {
      boxRef.value?.updateSelectedText({
        fontSize: selectedText.value.fontSize,
        fill: selectedText.value.fill,
      })
    }
  }

  // 删除文字
  const onDeleteText = () => {
    boxRef.value?.deleteSelectedText()
    selectedText.value = null
  }

  // 导出
  const onExport = () => {
    boxRef.value?.exportCanvas()
  }
</script>
