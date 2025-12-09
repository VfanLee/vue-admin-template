<template>
  <div class="three-lights" ref="containerRef"></div>
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
    scene.background = new THREE.Color(0x1a1a1a)

    // 创建相机
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.shadowMap.enabled = true
    containerRef.value.appendChild(renderer.domElement)

    // 创建几何体
    const geometry = new THREE.SphereGeometry(1, 32, 32)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.3, roughness: 0.4 })
    const sphere = new THREE.Mesh(geometry, material)
    sphere.castShadow = true
    sphere.receiveShadow = true
    scene.add(sphere)

    // 添加地面
    const planeGeometry = new THREE.PlaneGeometry(10, 10)
    const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x444444 })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.position.z = -2
    plane.receiveShadow = true
    scene.add(plane)

    // 添加多个彩色灯光
    const lights = [
      { color: 0xff0000, position: [3, 3, 3] }, // 红色
      { color: 0x00ff00, position: [-3, 3, 3] }, // 绿色
      { color: 0x0000ff, position: [0, -3, 3] }, // 蓝色
    ]

    lights.forEach(({ color, position }) => {
      const light = new THREE.PointLight(color, 1, 100)
      light.position.set(...(position as [number, number, number]))
      light.castShadow = true
      scene.add(light)

      // 添加辅助球体表示光源
      const lightSphere = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), new THREE.MeshBasicMaterial({ color }))
      lightSphere.position.set(...(position as [number, number, number]))
      scene.add(lightSphere)
    })

    // 添加环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    scene.add(ambientLight)

    // 动画循环
    let time = 0
    const animate = () => {
      requestAnimationFrame(animate)

      time += 0.01
      sphere.rotation.x += 0.005
      sphere.rotation.y += 0.01

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
      planeGeometry.dispose()
      planeMaterial.dispose()
      renderer.dispose()
    })
  }

  onMounted(() => {
    init()
  })
</script>

<style scoped lang="less">
  .three-lights {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
