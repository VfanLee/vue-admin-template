import { mergeConfig } from 'vite'
import baseConfig from './vite.config.base'
import VueDevTools from 'vite-plugin-vue-devtools'

export default () =>
  mergeConfig(
    {
      mode: 'development',
      server: {
        open: true,
        host: true,
        // port: 5173, // 默认：5173
      },
      plugins: [
        VueDevTools(),
        // ...
      ],
    },
    baseConfig,
  )
