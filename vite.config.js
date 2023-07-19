import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

// vite 配置：https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 导入全局样式
        additionalData: `
        @use "@/styles/element/var.scss" as *;
        @use "@/styles/variable.scss" as *;
        `
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
    }),
    Components({
      // 配置 element-plus 采用 sass 样式
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
    }),
    viteMockServe({
      mockPath: 'mock',
      // According to the project configuration. Can be configured in the .env file
      enable: true
    })
  ]
})
