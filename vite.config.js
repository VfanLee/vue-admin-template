import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
import Inspect from 'vite-plugin-inspect'

// https://cn.vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  base: '/vue3-admin-template/', // 默认：/
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@@': fileURLToPath(new URL('./', import.meta.url))
    }
  },
  build: {
    outDir: 'dist' // 默认：dist
  },
  server: {
    host: 'localhost', // 默认：localhost
    port: '5173' // 默认：5173
  },
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      // 自动导入 Element Plus 组件
      resolvers: [ElementPlusResolver()]
    }),
    // https://github.com/vbenjs/vite-plugin-svg-icons
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[name]'
    }),
    // https://github.com/vbenjs/vite-plugin-mock/tree/v2.9.1
    viteMockServe({
      mockPath: 'mock',
      localEnabled: command === 'serve',
      prodEnabled: command !== 'serve',
      supportTs: false, // 打开后将无法监视 .js 文件
      watchFiles: true, // 监视文件更改
      // 如果在生产环境中开启了 mock 函数，即 prodEnabled=true，则代码会注入到 injectFile 对应的文件底部。默认值为 main.{ts,js}
      injectCode: `
        import { setupProdMockServer } from '../mock';
        setupProdMockServer();
      `,
      logger: true // 显示请求日志
    }),
    Inspect()
  ]
}))
