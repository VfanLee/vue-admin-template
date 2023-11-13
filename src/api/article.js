import request from '@/utils/request'

export const reqArticleList = data =>
  request({
    url: '/vue3-admin-template/article/list',
    method: 'GET',
    data
  })
