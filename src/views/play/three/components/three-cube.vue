<template>
  <div class="three-cube" ref="containerRef"></div>
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
    camera.position.z = 8

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.value.appendChild(renderer.domElement)

    // 创建多个立方体
    const cubes: THREE.Mesh[] = []
    const colors = [0xff6b6b, 0x4ecdc4, 0x45b7d1, 0xf7b731, 0x5f27cd]

    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshPhongMaterial({ color: colors[i] })
      const mesh = new THREE.Mesh(geometry, material)

      const angle = (i / 5) * Math.PI * 2
      mesh.position.x = Math.cos(angle) * 3
      mesh.position.y = Math.sin(angle) * 3
      mesh.userData.angle = angle
      mesh.userData.radius = 3

      scene.add(mesh)
      cubes.push(mesh)
    }

    // 添加光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // 动画循环
    let time = 0
    const animate = () => {
      requestAnimationFrame(animate)

      time += 0.01

      cubes.forEach((cube, index) => {
        const angle = cube.userData.angle + time * 0.5
        const radius = cube.userData.radius + Math.sin(time + index) * 0.5

        cube.position.x = Math.cos(angle) * radius
        cube.position.y = Math.sin(angle) * radius

        cube.rotation.x += 0.005
        cube.rotation.y += 0.01
      })

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
      cubes.forEach((cube) => {
        cube.geometry.dispose()
        ;(cube.material as THREE.Material).dispose()
      })
      renderer.dispose()
    })
  }

  onMounted(() => {
    init()
  })
</script>

<style scoped lang="less">
  .three-cube {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
