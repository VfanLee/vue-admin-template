import request from '@/utils/request'

export const reqLogin = data =>
  request({
    url: '/mock/user/login',
    method: 'POST',
    data
  })

export const reqUserInfo = token =>
  request({
    url: '/mock/user/info',
    method: 'GET',
    params: { token }
  })
