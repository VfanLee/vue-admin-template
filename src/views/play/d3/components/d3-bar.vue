<template>
  <div class="d3-bar" ref="barRef"></div>
</template>

<script setup lang="ts">
  import * as d3 from 'd3'

  const barRef = useTemplateRef<HTMLDivElement>('barRef')

  const init = () => {
    if (!barRef.value) return

    d3.select(barRef.value).selectAll('*').remove()

    const containerWidth = barRef.value.clientWidth
    const containerHeight = barRef.value.clientHeight
    const margin = { top: 24, right: 24, bottom: 24, left: 24 }
    const width = containerWidth - margin.left - margin.right
    const height = containerHeight - margin.top - margin.bottom

    const data = [40, 80, 150, 100, 60]

    const svg = d3
      .select(barRef.value)
      .append('svg')
      .attr('width', containerWidth)
      .attr('height', containerHeight)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    // 创建比例尺
    const xScale = d3.scaleBand().domain(d3.range(data.length).map(String)).range([0, width]).padding(0.1)
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data) || 100])
      .range([height, 0])

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(String(i)) || 0)
      .attr('y', (d) => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height - yScale(d))
      .attr('fill', 'teal')
  }

  onMounted(() => {
    init()
  })
</script>

<style scoped lang="less">
  .d3-bar {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
