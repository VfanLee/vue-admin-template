<template>
  <div class="d3-axis" ref="axisRef"></div>
</template>

<script setup lang="ts">
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

  const axisRef = useTemplateRef<HTMLDivElement>('axisRef')

  let resizeObserver: ResizeObserver | null = null

  const init = () => {
    if (!axisRef.value) return

    d3.select(axisRef.value).selectAll('*').remove()

    const containerWidth = axisRef.value.clientWidth
    const containerHeight = axisRef.value.clientHeight
    const margin = { top: 24, right: 24, bottom: 24, left: 24 }
    const width = containerWidth - margin.left - margin.right
    const height = containerHeight - margin.top - margin.bottom

    // 创建 SVG
    const svg = d3
      .select(axisRef.value)
      .append('svg')
      .attr('width', containerWidth)
      .attr('height', containerHeight)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    // 创建 X 轴
    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, width])
      .padding(0.2)
    svg.append('g').attr('class', 'x-axis').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x))

    // 创建 Y 轴
    const y = d3.scaleLinear().domain([0, 100]).range([height, 0])
    svg
      .append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y).ticks(10).tickFormat(d3.format('d')))
  }

  onMounted(() => {
    init()

    // 监听容器大小变化
    if (axisRef.value) {
      resizeObserver = new ResizeObserver(() => {
        init()
      })
      resizeObserver.observe(axisRef.value)
    }
  })

  onBeforeUnmount(() => {
    if (resizeObserver && axisRef.value) {
      resizeObserver.unobserve(axisRef.value)
    }
  })
</script>

<style lang="less" scoped>
  .d3-axis {
    height: 100%;
    width: 100%;
  }
</style>
