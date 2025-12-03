<template>
  <div class="box">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, useTemplateRef } from 'vue'
  import { Canvas, IText, FabricImage } from 'fabric'

  const emit = defineEmits<{
    (e: 'selection-change', textProps: { fontSize: number; fill: string } | null): void
  }>()

  const canvasRef = useTemplateRef<HTMLCanvasElement | null>('canvasRef')
  let canvas = null as Canvas | null

  /** 初始化 */
  const init = () => {
    if (!canvasRef.value) return

    canvas = new Canvas(canvasRef.value, {
      width: 375,
      height: 667,
      backgroundColor: '#ffffff',
    })

    // 监听选中事件
    canvas.on('selection:created', handleSelection)
    canvas.on('selection:updated', handleSelection)
    canvas.on('selection:cleared', () => {
      emit('selection-change', null)
    })
  }

  // 处理选中
  const handleSelection = () => {
    if (!canvas) return
    const activeObject = canvas.getActiveObject()
    if (activeObject && activeObject instanceof IText) {
      emit('selection-change', {
        fontSize: activeObject.fontSize || 20,
        fill: (activeObject.fill as string) || '#000000',
      })
    } else {
      emit('selection-change', null)
    }
  }

  // 设置背景颜色
  const setBackgroundColor = (color: string) => {
    if (!canvas) return
    canvas.backgroundColor = color
    canvas.renderAll()
  }

  // 设置背景图片
  const setBackgroundImage = async (imageUrl: string) => {
    if (!canvas) return
    const img = await FabricImage.fromURL(imageUrl)
    // 缩放图片以适应画布
    const scaleX = canvas.width! / img.width!
    const scaleY = canvas.height! / img.height!
    const scale = Math.max(scaleX, scaleY)
    img.scale(scale)
    img.set({
      originX: 'center',
      originY: 'center',
      left: canvas.width! / 2,
      top: canvas.height! / 2,
    })
    canvas.backgroundImage = img
    canvas.renderAll()
  }

  // 清除背景图片
  const clearBackgroundImage = () => {
    if (!canvas) return
    canvas.backgroundImage = undefined
    canvas.renderAll()
  }

  // 添加文字
  const addText = (text: string) => {
    if (!canvas) return
    const itext = new IText(text, {
      fontSize: 20,
      fill: '#000000',
    })
    canvas.add(itext)
    canvas.centerObject(itext)
    canvas.setActiveObject(itext)
    canvas.renderAll()
  }

  // 更新选中文字属性
  const updateSelectedText = (props: { fontSize?: number; fill?: string }) => {
    if (!canvas) return
    const activeObject = canvas.getActiveObject()
    if (activeObject && activeObject instanceof IText) {
      if (props.fontSize !== undefined) {
        activeObject.set('fontSize', props.fontSize)
      }
      if (props.fill !== undefined) {
        activeObject.set('fill', props.fill)
      }
      canvas.renderAll()
    }
  }

  // 删除选中文字
  const deleteSelectedText = () => {
    if (!canvas) return
    const activeObject = canvas.getActiveObject()
    if (activeObject) {
      canvas.remove(activeObject)
      canvas.renderAll()
    }
  }

  // 导出
  const exportCanvas = () => {
    if (!canvas) return

    const imageSrc = canvas.toDataURL()
    const a = document.createElement('a')
    a.href = imageSrc
    a.download = 'image.png'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  onMounted(() => {
    init()
  })

  defineExpose({
    exportCanvas,
    setBackgroundColor,
    setBackgroundImage,
    clearBackgroundImage,
    addText,
    updateSelectedText,
    deleteSelectedText,
  })
</script>

<style scoped lang="less">
  .box {
    border: 2px solid;
  }
</style>
