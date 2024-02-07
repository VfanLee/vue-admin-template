import request from '@/utils/request'

export const reqLogin = data =>
  request({
    url: '/api/user/login',
    method: 'POST',
    data
  })

export const reqUserInfo = () =>
  request({
    url: '/api/user/info',
    method: 'GET'
  })
