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
    name: 'Super Admin',
    introduction: 'I am a super administrator',
    avatar: 'src/assets/vite.svg',
    roles: ['admin']
  },
  'editor-token': {
    name: 'Normal Editor',
    introduction: 'I am an editor',
    avatar: 'src/assets/vite.svg',
    roles: ['editor']
  }
}

export default [
  // 登录
  {
    url: '/mock/user/login',
    method: 'post',
    timeout: 0,
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

  // 获取用户信息
  {
    url: '/mock/user/info',
    method: 'get',
    timeout: 0,
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
