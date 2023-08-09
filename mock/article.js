import Mock from 'mockjs'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      'id': '@increment',
      'timestamp': +Mock.Random.date('T'),
      'author': '@cname',
      'reviewer': '@cname',
      'title': '@ctitle(5, 10)',
      'content_short': 'mock data',
      'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
      'forecast': '@float(0, 100, 2, 2)',
      'importance': '@integer(1, 3)',
      'type|1': ['CN', 'US', 'JP', 'EU'],
      'status|1': ['published', 'draft'],
      'display_time': '@datetime',
      'comment_disabled': true,
      'pageviews': '@integer(300, 5000)',
      'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
      'platforms': ['a-platform']
    })
  )
}

export default [
  {
    url: '/mock/article/list',
    type: 'get',
    response: config => {
      const { importance, type, title, pn = 1, ps = 20, sort } = config.query

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.includes(title)) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < ps * pn && index >= ps * (pn - 1))

      return {
        code: 200,
        message: '成功',
        result: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  }
]
