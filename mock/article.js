import Mock from 'mockjs'

const list = []
const count = 10

for (let i = 0; i < count; i++) {
  list.push(
    Mock.mock({
      id: '@increment',
      title: '@ctitle(5, 10)',
      cover: 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
      author: '@cname'
    })
  )
}

export default [
  {
    url: '/mock/article/list',
    type: 'get',
    response: config => {
      return {
        code: 200,
        message: 'success',
        result: list
      }
    }
  }
]
