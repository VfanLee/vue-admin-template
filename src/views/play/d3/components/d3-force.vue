<template>
  <div class="d3-force" ref="containerRef"></div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import * as d3 from 'd3'

  const containerRef = ref<HTMLDivElement>()

  interface Node {
    id: string
    label: string
  }

  interface Link {
    source: string | Node
    target: string | Node
  }

  // 模拟的图数据
  const mockData = {
    nodes: [
      { id: 'vue', label: 'Vue' },
      { id: 'component', label: 'Component' },
      { id: 'router', label: 'Router' },
      { id: 'store', label: 'Store' },
      { id: 'api', label: 'API' },
      { id: 'utils', label: 'Utils' },
      { id: 'hooks', label: 'Hooks' },
      { id: 'directive', label: 'Directive' },
      { id: 'plugin', label: 'Plugin' },
    ] as Node[],
    links: [
      { source: 'vue', target: 'component' },
      { source: 'vue', target: 'router' },
      { source: 'vue', target: 'store' },
      { source: 'component', target: 'api' },
      { source: 'component', target: 'hooks' },
      { source: 'component', target: 'utils' },
      { source: 'router', target: 'store' },
      { source: 'store', target: 'api' },
      { source: 'utils', target: 'hooks' },
      { source: 'plugin', target: 'vue' },
      { source: 'directive', target: 'component' },
    ] as any[],
  }

  let simulation: any = null
  let resizeObserver: ResizeObserver | null = null

  const init = () => {
    if (!containerRef.value) return

    d3.select(containerRef.value).selectAll('*').remove()

    const width = containerRef.value.clientWidth
    const height = containerRef.value.clientHeight

    // SVG 设置
    const svg = d3.select(containerRef.value).append('svg').attr('width', width).attr('height', height).style('background-color', '#fff')

    // 定义箭头标记
    svg
      .append('defs')
      .append('marker')
      .attr('id', 'arrowhead')
      .attr('markerWidth', 10)
      .attr('markerHeight', 10)
      .attr('refX', 28)
      .attr('refY', 3)
      .attr('orient', 'auto')
      .append('polygon')
      .attr('points', '0 0, 10 3, 0 6')
      .attr('fill', '#999')

    // 创建分组
    const g = svg.append('g')

    // 复制数据以避免修改原始数据
    const nodes = mockData.nodes.map((d: any) => ({ ...d })) as any[]
    const links = mockData.links.map((d: any) => ({
      source: d.source,
      target: d.target,
    })) as any[]

    // 力模拟
    simulation = d3
      .forceSimulation(nodes)
      .force(
        'link',
        d3
          .forceLink(links)
          .id((d: any) => d.id)
          .distance(80)
          .strength(0.5),
      )
      .force('charge', d3.forceManyBody().strength(-300))
      .force('collide', d3.forceCollide().radius(35))
      .force('center', d3.forceCenter(width / 2, height / 2))

    // 绘制连线
    const link = g.selectAll('line').data(links).enter().append('line').attr('stroke', '#ddd').attr('stroke-width', 2).attr('marker-end', 'url(#arrowhead)')

    // 绘制节点
    const node = g
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', 25)
      .attr('fill', '#5B8DEE')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')

    // 添加文本标签
    const text = g
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('fill', '#fff')
      .attr('pointer-events', 'none')
      .attr('font-weight', 'bold')
      .text((d: any) => d.label)

    // 拖拽行为
    const drag = d3
      .drag<any, any>()
      .on('start', (event: any, d: any) => {
        if (!event.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x
        d.fy = d.y
      })
      .on('drag', (event: any, d: any) => {
        d.fx = event.x
        d.fy = event.y
      })
      .on('end', (event: any, d: any) => {
        if (!event.active) simulation.alphaTarget(0)
        d.fx = null
        d.fy = null
      })

    node.call(drag)

    // hover 交互
    node
      .on('mouseenter', function (event: any, d: any) {
        // 高亮节点
        d3.select(this as any)
          .attr('fill', '#FF6B6B')
          .attr('r', 32)
          .transition()
          .duration(200)

        // 高亮相关连线
        link
          .attr('stroke', (l: any) => {
            return l.source === d || l.target === d ? '#FF6B6B' : '#ddd'
          })
          .attr('stroke-width', (l: any) => {
            return l.source === d || l.target === d ? 3 : 2
          })

        // 高亮相邻节点
        node.attr('fill', (n: any) => {
          const isConnected = links.some((l: any) => (l.source === d && l.target === n) || (l.source === n && l.target === d))
          return isConnected || n === d ? '#FF6B6B' : '#5B8DEE'
        })

        text.attr('font-size', (n: any) => {
          return n === d ? '14px' : '12px'
        })
      })
      .on('mouseleave', function () {
        node.attr('fill', '#5B8DEE').attr('r', 25)

        link.attr('stroke', '#ddd').attr('stroke-width', 2)

        text.attr('font-size', '12px')
      })

    // 缩放和平移
    const zoom = d3.zoom<any, any>().on('zoom', (event: any) => {
      g.attr('transform', event.transform)
    })

    svg.call(zoom as any)

    // 更新位置
    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y)

      node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y)

      text.attr('x', (d: any) => d.x).attr('y', (d: any) => d.y)
    })
  }

  onMounted(() => {
    init()

    if (containerRef.value) {
      resizeObserver = new ResizeObserver(() => {
        init()
      })
      resizeObserver.observe(containerRef.value)
    }
  })

  onBeforeUnmount(() => {
    if (resizeObserver && containerRef.value) {
      resizeObserver.unobserve(containerRef.value)
    }
    if (simulation) {
      simulation.stop()
    }
  })
</script>

<style scoped lang="less">
  .d3-force {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;

    svg {
      background-color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
    }

    circle {
      transition: all 0.2s ease;

      &:hover {
        filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15));
      }
    }

    line {
      transition: all 0.2s ease;
    }
  }
</style>
