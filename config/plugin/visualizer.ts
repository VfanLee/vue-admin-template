/**
 * Generation packaging analysis
 * 生成打包分析
 */
import visualizer from 'rollup-plugin-visualizer'

export default function configVisualizerPlugin(mode?: string) {
  // Only enable visualizer when build mode equals `report`.
  if (mode === 'report') {
    return visualizer({
      // write report into dist so it's easy to find and upload as CI artifact
      filename: './dist/visualizer.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    })
  }
  return []
}
