import Cookies from 'js-cookie'

export const getToken = () => {
  return Cookies.get('token') || ''
}

export const setToken = token => {
  return Cookies.set('token', token)
}

export const removeToken = () => {
  return Cookies.remove('token')
}
