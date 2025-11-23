import { mergeConfig } from 'vite'
import baseConfig from './vite.config.base'
import VueDevTools from 'vite-plugin-vue-devtools'

export default mergeConfig(
  {
    mode: 'development',
    server: {
      open: true,
    },
    plugins: [VueDevTools()],
  },
  baseConfig,
)
