<template>
  <div ref="chartRef" class="bar-chart"></div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import * as d3 from 'd3'

  const data1 = [
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
    const margin = { top: 20, right: 30, bottom: 40, left: 50 }
    const width = chartRef.value.clientWidth - margin.left - margin.right
    const height = 400 - margin.top - margin.bottom

    // 创建 SVG
    const svg = d3
      .select(chartRef.value)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    // 创建 X 轴比例尺
    const x = d3
      .scaleBand()
      .domain(data1.map((d) => d.name))
      .range([0, width])
      .padding(0.2)

    // 创建 Y 轴比例尺
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data1, (d) => d.value) as number])
      .nice()
      .range([height, 0])

    // 创建颜色比例尺
    const color = d3.scaleOrdinal(d3.schemeCategory10)

    // 添加 X 轴
    svg.append('g').attr('class', 'x-axis').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x)).selectAll('text').style('font-size', '12px')

    // 添加 Y 轴
    svg.append('g').attr('class', 'y-axis').call(d3.axisLeft(y)).selectAll('text').style('font-size', '12px')

    // 添加 Y 轴标签
    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - margin.left)
      .attr('x', 0 - height / 2)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font-size', '14px')
      .text('数值')

    // // 创建提示框
    // const tooltip = d3
    //   .select(chartRef.value)
    //   .append('div')
    //   .attr('class', 'tooltip')
    //   .style('opacity', 0)
    //   .style('position', 'absolute')
    //   .style('background-color', 'rgba(0, 0, 0, 0.8)')
    //   .style('color', '#fff')
    //   .style('padding', '8px 12px')
    //   .style('border-radius', '4px')
    //   .style('font-size', '12px')
    //   .style('pointer-events', 'none')
    //   .style('z-index', '1000')

    // // 绘制柱状图
    // svg
    //   .selectAll('.bar')
    //   .data(data)
    //   .enter()
    //   .append('rect')
    //   .attr('class', 'bar')
    //   .attr('x', (d) => x(d.name) as number)
    //   .attr('width', x.bandwidth())
    //   .attr('y', height) // 从底部开始
    //   .attr('height', 0) // 初始高度为 0
    //   .attr('fill', (d, i) => color(i.toString()))
    //   .attr('rx', 4) // 圆角
    //   .style('cursor', 'pointer')
    //   // .on('mouseover', function (event, d) {
    //   //   d3.select(this).attr('opacity', 0.7)
    //   //   tooltip.transition().duration(200).style('opacity', 1)
    //   //   tooltip
    //   //     .html(`<strong>${d.name}</strong><br/>数值: ${d.value}`)
    //   //     .style('left', event.pageX + 10 + 'px')
    //   //     .style('top', event.pageY - 28 + 'px')
    //   // })
    //   // .on('mouseout', function () {
    //   //   d3.select(this).attr('opacity', 1)
    //   //   tooltip.transition().duration(200).style('opacity', 0)
    //   // })
    //   .transition() // 添加动画
    //   .duration(800)
    //   .delay((d, i) => i * 100)
    //   .attr('y', (d) => y(d.value))
    //   .attr('height', (d) => height - y(d.value))

    // // 添加数值标签
    // svg
    //   .selectAll('.label')
    //   .data(data)
    //   .enter()
    //   .append('text')
    //   .attr('class', 'label')
    //   .attr('x', (d) => (x(d.name) as number) + x.bandwidth() / 2)
    //   .attr('y', (d) => y(d.value) - 5)
    //   .attr('text-anchor', 'middle')
    //   .style('font-size', '12px')
    //   .style('fill', '#333')
    //   .style('opacity', 0)
    //   .text((d) => d.value)
    //   .transition()
    //   .duration(800)
    //   .delay((d, i) => i * 100 + 400)
    //   .style('opacity', 1)
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
