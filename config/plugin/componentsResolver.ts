/**
 * 组件按需引入
 * - https://github.com/antfu/unplugin-vue-components
 * - https://arco.design/vue/docs/start
 * 虽然项目中是全量引入组件，但此插件会默认使用。
 */
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

export default function configArcoResolverPlugin() {
  const componentsResolver = Components({
    dts: 'components.d.ts', // 生成 components.d.ts 全局声明
    dirs: [], // [] 空声明避免解析到 src/components
    deep: false,
    resolvers: [ArcoResolver()],
  })
  return componentsResolver
}
