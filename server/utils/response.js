const CODE = {
  SUCCESS: 1,
  FAILURE: 0,
  USER_NOT_FOUND: 10000,
  TOKEN_EXPIRED: 10001
}

const MESSAGE = {
  SUCCESS: '请求成功',
  FAILURE: '请求失败',
  USER_NOT_FOUND: '用户不存在',
  TOKEN_EXPIRED: 'token 过期'
}

function createResponse(code, msg, data = null) {
  return {
    code,
    msg,
    data
  }
}

module.exports = {
  createResponse,
  MESSAGE,
  CODE
}
