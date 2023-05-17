import request from '@/utils/request'

export const login = data =>
  request({
    url: '/mock/user/login',
    method: 'POST',
    data,
  })
