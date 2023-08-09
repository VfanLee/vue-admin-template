import request from '@/utils/request'

export const reqArticleList = data =>
  request({
    url: '/mock/article/list',
    method: 'GET',
    data
  })
