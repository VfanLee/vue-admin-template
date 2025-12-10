<template>
  <div class="general-container">
    <Breadcrumb :items="['演练场', 'Three.js']" />
    <div class="demo-container">
      <!-- 导航区 -->
      <div class="demo-nav__wrapper">
        <ul class="demo-nav">
          <li v-for="item in demoList" :key="item.id" :class="{ active: activeDemo === item.id }" @click="scrollToDemo(item.id)">
            {{ item.title }}
          </li>
        </ul>
      </div>
      <!-- 内容区 -->
      <div class="demo-content__wrapper">
        <div class="demo-content" ref="contentAreaRef" @scroll="handleScroll">
          <div class="demo-section" v-for="item in demoList" :key="item.id" :id="item.id">
            <component :is="item.component" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Demo1 from './components/demo-1.vue'
  import Demo2 from './components/demo-2.vue'
  import Demo3 from './components/demo-3.vue'
  import ThreeBasic from './components/three-basic.vue'
  import ThreeCube from './components/three-cube.vue'
  import ThreeLights from './components/three-lights.vue'

  // Demo列表配置
  const demoList = shallowRef([
    { id: 'demo-1', title: 'Demo 1', component: Demo1 },
    { id: 'demo-2', title: 'Demo 2', component: Demo2 },
    { id: 'demo-3', title: 'Demo 3', component: Demo3 },
    // { id: 'three-basic', title: 'Three Basic', component: ThreeBasic },
    // { id: 'three-cube', title: 'Three Cube', component: ThreeCube },
    // { id: 'three-lights', title: 'Three Lights', component: ThreeLights },
  ])

  const contentAreaRef = ref<HTMLElement | null>(null)
  const activeDemo = ref('demo-2')
  let isScrolling = false

  // 滚动到指定demo
  const scrollToDemo = (id: string) => {
    const element = document.getElementById(id)
    if (element && contentAreaRef.value) {
      isScrolling = true
      activeDemo.value = id

      // 平滑滚动到目标元素
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })

      // 滚动结束后重置标志
      setTimeout(() => {
        isScrolling = false
      }, 800)
    }
  }

  // 监听滚动事件,更新当前激活的demo
  const handleScroll = () => {
    if (isScrolling || !contentAreaRef.value) return

    const scrollTop = contentAreaRef.value.scrollTop
    const viewportHeight = contentAreaRef.value.clientHeight

    for (const item of demoList.value) {
      const element = document.getElementById(item.id)
      if (element) {
        const rect = element.getBoundingClientRect()
        const containerRect = contentAreaRef.value.getBoundingClientRect()
        const relativeTop = rect.top - containerRect.top

        if (relativeTop >= -viewportHeight / 2 && relativeTop < viewportHeight / 2) {
          activeDemo.value = item.id
          break
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .general-container {
    // 计算高度：100vh - navbar(60px) - breadcrumb(40px) - footer(40px)
    height: calc(100vh - 60px - 40px - 40px);
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .demo-container {
    display: flex;
    gap: 24px;
    flex: 1;
    min-height: 0;

    .demo-nav__wrapper {
      flex: 0 0 240px;
      background-color: var(--color-bg-2);
      border-radius: 8px;
      padding: 16px 0;
      overflow-y: auto;

      .demo-nav {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          padding: 12px 24px;
          margin: 4px 12px;
          cursor: pointer;
          border-radius: 4px;
          font-size: 14px;
          color: var(--color-text-2);
          transition: all 0.2s ease;
          position: relative;

          &:hover {
            background-color: var(--color-fill-2);
            color: var(--color-text-1);
          }

          &.active {
            background-color: rgb(var(--primary-6));
            color: #fff;
            font-weight: 500;

            &::before {
              content: '';
              position: absolute;
              left: 8px;
              top: 50%;
              transform: translateY(-50%);
              width: 3px;
              height: 16px;
              background-color: #fff;
              border-radius: 2px;
            }
          }
        }
      }
    }

    .demo-content__wrapper {
      flex: 1;
      background-color: #fff;
      border-radius: 8px;
      padding: 24px;
      overflow: hidden;

      .demo-content {
        height: 100%;
        overflow-y: auto;

        /* 隐藏滚动条但保持滚动功能 */
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE 和 Edge */

        &::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        .demo-section {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background-color: #fff;
          border-radius: 8px;
          margin-bottom: 24px;

          & > * {
            flex: 1;
            min-height: 0;
            overflow: hidden;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
</style>
