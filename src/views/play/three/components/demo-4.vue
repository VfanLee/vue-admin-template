<template>
  <div class="demo-container" ref="containerRef">
    <canvas class="demo-canvas" ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
  import * as THREE from 'three'
  import gsap from 'gsap'

  const containerRef = useTemplateRef<HTMLDivElement>('containerRef')
  const canvasRef = useTemplateRef<HTMLCanvasElement>('canvasRef')

  const init = () => {
    if (!containerRef.value) return

    // Sizes
    const sizes = {
      width: containerRef.value.clientWidth,
      height: containerRef.value.clientHeight,
    }

    // Scene
    const scene = new THREE.Scene()

    // Object
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    // x 轴从左到右，y 轴从下到上，z 轴从里到外
    camera.position.z = 3

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.value!,
    })
    renderer.setSize(sizes.width, sizes.height)

    // Gsap
    gsap.to(mesh.position, { x: 2, duration: 1, delay: 1 })
    gsap.to(mesh.position, { x: 0, duration: 1, delay: 2 })

    // Animation
    // const clock = new THREE.Clock()
    const tick = () => {
      // const elapsedTime = clock.getElapsedTime()
      // mesh.rotation.y = elapsedTime * Math.PI * 2 // 一秒旋转一圈

      requestAnimationFrame(tick)
      renderer.render(scene, camera)
    }
    tick()
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
