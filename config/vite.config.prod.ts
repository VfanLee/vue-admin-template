import { mergeConfig } from 'vite'
import baseConfig from './vite.config.base'
import configCompressPlugin from './plugin/compress'
import configVisualizerPlugin from './plugin/visualizer'
import configArcoResolverPlugin from './plugin/arcoResolver'
import configImageminPlugin from './plugin/imagemin'

export default ({ mode }: { mode: string }) =>
  mergeConfig(
    {
      plugins: [
        configCompressPlugin('gzip'),
        // pass mode to the visualizer plugin so it knows whether to enable
        configVisualizerPlugin(mode),
        configArcoResolverPlugin(),
        configImageminPlugin(),
      ],
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              arco: ['@arco-design/web-vue'],
              chart: ['echarts', 'vue-echarts'],
              vue: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
            },
          },
        },
        chunkSizeWarningLimit: 2000,
      },
    },
    baseConfig,
  )
