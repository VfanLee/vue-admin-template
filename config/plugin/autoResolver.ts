import AutoImport from 'unplugin-auto-import/vite'

/**
 * 自动导入
 */
export default function configArcoResolverPlugin() {
  const autoResolverPlugin = AutoImport({
    dts: 'auto-imports.d.ts', // 生成 auto-imports.d.ts 全局声明
    imports: [
      'vue', // 自动导入 Vue 相关函数，如 ref, reactive, toRef 等
    ],
  })
  return autoResolverPlugin
}
