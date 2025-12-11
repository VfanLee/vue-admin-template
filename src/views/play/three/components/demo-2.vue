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
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    const mesh = new THREE.Mesh(geometry, material)

    // === position ===
    // mesh.position.x = 0.7
    // mesh.position.y = -0.6
    // mesh.position.z = 1
    mesh.position.set(0.7, -0.6, 1)

    // === scale ===
    // mesh.scale.x = 2
    // mesh.scale.y = 0.5
    // mesh.scale.z = 0.5
    mesh.scale.set(2, 0.5, 0.5)

    // === rotation ===
    // 需要注意轴顺序的问题
    mesh.rotation.reorder('YXZ') // 旋转顺序，例如：射击游戏
    mesh.rotation.x = Math.PI * 0.25 // 45度
    mesh.rotation.y = Math.PI * 0.25 // 45度

    scene.add(mesh)

    // 轴辅助器
    const axesHelper = new THREE.AxesHelper()
    scene.add(axesHelper)

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

    // camera.position.x = 1
    // camera.position.y = 1
    camera.position.z = 3
    // camera.position.set(1, 1, 3)

    // camera.lookAt(new THREE.Vector3(3, 0, 0))
    camera.lookAt(mesh.position)

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
