const express = require('express')

const router = express.Router()
const { token, user } = require('../data/user')

router.post('/login', function (req, res, next) {
  const { username } = req.body
  const _token = token[username]

  if (_token) {
    res.send({
      code: 200,
      message: '成功',
      result: _token
    })
  } else {
    res.send({
      code: 201,
      message: '用户不存在'
    })
  }
})

router.get('/info', function (req, res, next) {
  const { authorization } = req.headers
  const _user = user[authorization]

  if (_user) {
    res.send({
      code: 200,
      message: '成功',
      result: _user
    })
  } else {
    res.send({
      code: 201,
      message: 'token 失效'
    })
  }
})

module.exports = router
