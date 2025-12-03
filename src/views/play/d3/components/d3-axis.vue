<template>
  <div ref="chartRef" class="bar-chart"></div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import * as d3 from 'd3'

  const data = [
    { name: '周一', value: 30 },
    { name: '周二', value: 80 },
    { name: '周三', value: 45 },
    { name: '周四', value: 60 },
    { name: '周五', value: 75 },
    { name: '周六', value: 90 },
    { name: '周日', value: 55 },
  ]

  const chartRef = ref<HTMLDivElement>()

  let resizeObserver: ResizeObserver | null = null

  const init = () => {
    if (!chartRef.value) return

    // 清空之前的内容
    d3.select(chartRef.value).selectAll('*').remove()

    // 图表配置
    const width = chartRef.value.clientWidth
    const height = 400

    // 创建 SVG
    const svg = d3.select(chartRef.value).append('svg').attr('width', width).attr('height', height).append('g')

    // 创建 X 轴比例尺
    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, width])
      .padding(0.2)

    // 添加 X 轴
    svg.append('g').attr('class', 'x-axis').call(d3.axisBottom(x)).selectAll('text')
  }

  onMounted(() => {
    init()

    // 监听容器大小变化
    if (chartRef.value) {
      resizeObserver = new ResizeObserver(() => {
        init()
      })
      resizeObserver.observe(chartRef.value)
    }
  })

  onBeforeUnmount(() => {
    if (resizeObserver && chartRef.value) {
      resizeObserver.unobserve(chartRef.value)
    }
  })
</script>
