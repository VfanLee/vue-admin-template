<template>
  <div class="demo-container" ref="containerRef">
    <canvas class="demo-canvas" ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
  import * as THREE from 'three'

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
    const group = new THREE.Group()
    group.position.y = 1
    group.scale.y = 2
    group.rotation.y = Math.PI / 4
    scene.add(group)

    const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }))
    cube1.position.x = -2
    group.add(cube1)

    const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x00ff00 }))
    group.add(cube2)

    const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x0000ff }))
    cube3.position.x = 2
    group.add(cube3)

    // 轴辅助器
    const axesHelper = new THREE.AxesHelper()
    scene.add(axesHelper)

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

    camera.position.z = 5

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.value!,
    })
    renderer.setSize(sizes.width, sizes.height)

    renderer.render(scene, camera)
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
