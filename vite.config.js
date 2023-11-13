import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'

// https://cn.vitejs.dev/config/
export default defineConfig(command => ({
  base: '/vue3-admin-template/',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    // 参考：https://github.com/vbenjs/vite-plugin-svg-icons
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[name]'
    }),
    // 参考：https://github.com/vbenjs/vite-plugin-mock/tree/v2.9.1
    viteMockServe({
      mockPath: 'mock',
      localEnabled: command.command === 'serve', // 开发打包开关
      prodEnabled: command.command !== 'serve', // 生产打包开关
      supportTs: false, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
      watchFiles: true, // 监视文件更改
      //这样可以控制关闭mock的时候不让mock打包到最终代码内
      injectCode: `
        import { setupProdMockServer } from '../mock';
        setupProdMockServer();
      `,
      logger: true // 显示请求日志
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist'
  },
  server: {
    host: 'localhost',
    port: '5173'
  }
}))
