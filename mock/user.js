const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default [
  {
    url: '/mock/user/login',
    method: 'post',
    timeout: 500,
    response: data => {
      const { username } = data.body

      const token = tokens[username]
      if (token) {
        return {
          code: 200,
          message: '成功',
          result: token
        }
      } else {
        return {
          code: 201,
          message: '用户不存在'
        }
      }
    }
  },

  {
    url: '/mock/user/info',
    method: 'get',
    timeout: 500,
    response: data => {
      const { token } = data.query

      const user = users[token]
      if (user) {
        return {
          code: 200,
          message: '成功',
          result: user
        }
      } else {
        return {
          code: 201,
          message: 'token 失效'
        }
      }
    }
  }
]
