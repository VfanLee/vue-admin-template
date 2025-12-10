<template>
  <div class="demo-container" ref="containerRef">
    <canvas class="demo-canvas" ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
  import * as THREE from 'three'

  const containerRef = useTemplateRef<HTMLDivElement>('containerRef')
  const canvasRef = useTemplateRef<HTMLCanvasElement>('canvasRef')

  const getSize = () => {
    if (!containerRef.value) return { width: 0, height: 0 }
    return {
      width: containerRef.value.clientWidth,
      height: containerRef.value.clientHeight,
    }
  }

  const init = () => {
    if (!containerRef.value) return

    // Scene
    const scene = new THREE.Scene()

    // Object
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Sizes
    const sizes = getSize()

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    // x 轴从左到右，y 轴从下到上，z 轴从里到外
    camera.position.z = 3

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.value!,
    })
    renderer.setSize(sizes.width, sizes.height)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      mesh.rotation.y += 0.01
      mesh.rotation.x += 0.01

      renderer.render(scene, camera)
    }
    animate()
  }

  onMounted(() => {
    init()
  })
</script>

<style scoped lang="less">
  .demo-container {
    width: 100%;
    height: 100%;
  }
</style>
