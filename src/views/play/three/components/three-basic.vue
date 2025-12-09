<template>
  <div class="three-basic" ref="containerRef"></div>
</template>

<script setup lang="ts">
  import * as THREE from 'three'

  const containerRef = useTemplateRef<HTMLDivElement>('containerRef')

  const init = () => {
    if (!containerRef.value) return

    // 清空之前的内容
    while (containerRef.value.firstChild) {
      containerRef.value.removeChild(containerRef.value.firstChild)
    }

    const width = containerRef.value.clientWidth
    const height = containerRef.value.clientHeight

    // 创建场景
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf5f5f5)

    // 创建相机
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.value.appendChild(renderer.domElement)

    // 创建几何体
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshPhongMaterial({ color: 0x00aaff })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // 添加光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // 动画循环
    const animate = () => {
      requestAnimationFrame(animate)

      mesh.rotation.x += 0.01
      mesh.rotation.y += 0.01

      renderer.render(scene, camera)
    }

    animate()

    // 处理窗口调整
    const handleResize = () => {
      const newWidth = containerRef.value?.clientWidth || width
      const newHeight = containerRef.value?.clientHeight || height

      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    // 清理
    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
      containerRef.value?.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    })
  }

  onMounted(() => {
    init()
  })
</script>

<style scoped lang="less">
  .three-basic {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
