import Mock from 'mockjs'

Mock.mock('/mock/user/login', {
  id: '@guid',
  username: '@cname',
  email: '@email',
  avatar: Mock.Random.image('200x100', '#894FC4', '#FFF', 'png', '!'),
  address: '@county(true)',
})
