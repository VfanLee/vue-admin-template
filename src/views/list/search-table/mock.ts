import Mock from 'mockjs'
import qs from 'qs'
import setupMock, { successResponseWrap } from '@/utils/setup-mock'
import type { GetParams } from '@/types/global'

const { Random } = Mock

const data = Mock.mock({
  'list|55': [
    {
      'id|8': /[A-Z][a-z][-][0-9]/,
      'number|2-3': /[0-9]/,
      'name|4-8': /[A-Z]/,
      'contentType|1': ['img', 'horizontalVideo', 'verticalVideo'],
      'count|2-3': /[0-9]/,
      'status|1': ['online', 'offline'],
      'filterType|1': ['artificial', 'rules'],
      'createdTime': Random.datetime(),
    },
  ],
})

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/list/policy'), (params: GetParams) => {
      const query = (params.url || '').split('?')[1] || ''
      const { current = 1, pageSize = 10 } = qs.parse(query) as any
      const p = current as number
      const ps = pageSize as number
      return successResponseWrap({
        list: data.list.slice((p - 1) * ps, p * ps),
        total: 55,
      })
    })
  },
})
