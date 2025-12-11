<template>
  <div class="demo-container" ref="containerRef">
    <canvas class="demo-canvas" ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

  const containerRef = useTemplateRef<HTMLDivElement>('containerRef')
  const canvasRef = useTemplateRef<HTMLCanvasElement>('canvasRef')

  const init = () => {
    if (!containerRef.value) return

    // Sizes
    const sizes = {
      width: containerRef.value.clientWidth,
      height: containerRef.value.clientHeight,
    }
    // Cursor
    const cursor = {
      x: 0,
      y: 0,
    }
    containerRef.value.addEventListener('mousemove', (evt: MouseEvent) => {
      const rect = containerRef.value!.getBoundingClientRect()
      cursor.x = (evt.clientX - rect.left) / sizes.width - 0.5
      cursor.y = -((evt.clientY - rect.top) / sizes.height - 0.5)
      console.log(cursor.x, cursor.y)
    })

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
    // camera.lookAt(mesh.position)
    // scene.add(camera)

    // Controls
    const controls = new OrbitControls(camera, canvasRef.value!)
    controls.enableDamping = true // 开启阻尼

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.value!,
    })
    renderer.setSize(sizes.width, sizes.height)

    const tick = () => {
      // // Update camera
      // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
      // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
      // camera.position.y = cursor.y * 5
      // camera.lookAt(mesh.position)

      // Update Controls
      controls.update()

      requestAnimationFrame(tick)

      renderer.render(scene, camera)
    }
    tick()
  }

  onMounted(() => {
    init()
  })

  onBeforeUnmount(() => {
    if (containerRef.value) {
      containerRef.value.removeEventListener('mousemove', () => {})
    }
  })
</script>

<style scoped lang="less">
  .demo-container {
    width: 100%;
    height: 100%;
  }
</style>
