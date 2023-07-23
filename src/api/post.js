import request from '@/utils/request'

const jsonplaceholderURL = 'http://jsonplaceholder.typicode.com'

export const reqPosts = () =>
  request({
    url: jsonplaceholderURL + '/posts',
    method: 'GET'
  })

export const reqPost = postId =>
  request({
    url: jsonplaceholderURL + `/posts/${postId}`,
    method: 'GET'
  })

export const reqPostCommentsByParams = postId => {
  request({
    url: jsonplaceholderURL + `/posts/${postId}/comments`,
    method: 'GET'
  })
}

export const reqPostCommentsByQuery = postId => {
  request({
    url: jsonplaceholderURL + `/comments?postId=${postId}`,
    method: 'GET'
  })
}

export const reqPostsPost = () =>
  request({
    url: jsonplaceholderURL + '/posts',
    method: 'POST'
  })

export const reqPostsPut = postId =>
  request({
    url: jsonplaceholderURL + `/posts/${postId}`,
    method: 'PUT'
  })

export const reqPostsPatch = postId =>
  request({
    url: jsonplaceholderURL + `/posts/${postId}`,
    method: 'PATCH'
  })

export const reqPostsDelete = postId =>
  request({
    url: jsonplaceholderURL + `/posts/${postId}`,
    method: 'DELETE'
  })
