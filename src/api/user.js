import request from '@/utils/request'

export const reqLogin = data =>
  request({
    url: '/mock/user/login',
    method: 'POST',
    data
  })
