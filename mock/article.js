import Mock from 'mockjs'

const list = []
const count = 10

for (let i = 0; i < count; i++) {
  list.push(
    Mock.mock({
      id: '@increment',
      title: '@ctitle(5, 10)',
      cover: 'https://picsum.photos/32/32',
      author: '@cname'
    })
  )
}

export default [
  {
    url: '/vue3-admin-template/article/list',
    type: 'get',
    response: ({ body, query, headers, url }) => {
      return {
        code: 200,
        message: 'success',
        result: list
      }
    }
  }
]
