import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

import user from './user'
import article from './article'

export function setupProdMockServer() {
  createProdMockServer([...user, ...article])
}
