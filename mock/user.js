export default [
  // 登录
  {
    url: '/mock/user/login',
    method: 'post',
    timeout: 1000,
    response: data => {
      const { username, password } = data.body

      if (username === 'admin' && password === 'admin') {
        return {
          code: 200,
          message: '登录成功',
          result: {
            id: 1,
            username: 'admin',
            nickname: 'admin',
            token: 'Admin-Token'
          }
        }
      } else {
        return {
          code: 201,
          message: '用户名或者密码错误'
        }
      }
    }
  }
]
