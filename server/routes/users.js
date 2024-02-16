const express = require('express')
const { createResponse, CODE, MESSAGE } = require('../utils/response')

const router = express.Router()
const { token, user, menu } = require('../data/user')

router.post('/login', function (req, res, next) {
  const { username } = req.body
  const _token = token[username]

  if (!_token) {
    res.send(createResponse(CODE.USER_NOT_FOUND, MESSAGE.USER_NOT_FOUND))
  }

  res.send(createResponse(CODE.SUCCESS, MESSAGE.SUCCESS, _token))
})

router.get('/info', function (req, res, next) {
  const { authorization } = req.headers
  const _user = user[authorization]

  if (!_user) {
    res.status(401).send(createResponse(CODE.TOKEN_EXPIRED, MESSAGE.TOKEN_EXPIRED))
  }

  res.send(createResponse(CODE.SUCCESS, MESSAGE.SUCCESS, _user))
})

router.get('/menu', function (req, res, next) {
  const { authorization } = req.headers
  const _menu = menu[authorization]

  if (!_menu) {
    res.status(401).send(createResponse(CODE.TOKEN_EXPIRED, MESSAGE.TOKEN_EXPIRED))
  }

  res.send(createResponse(CODE.SUCCESS, MESSAGE.SUCCESS, _menu))
})

module.exports = router
