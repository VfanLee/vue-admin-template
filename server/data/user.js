module.exports.token = {
  admin: 'admin-token',
  editor: 'editor-token'
}

module.exports.user = {
  'admin-token': {
    name: 'Super Admin',
    introduction: 'I am a super administrator',
    avatar: 'https://picsum.photos/26/26'
  },
  'editor-token': {
    name: 'Normal Editor',
    introduction: 'I am an editor',
    avatar: 'https://picsum.photos/24/24'
  }
}

module.exports.menu = {
  'admin-token': ['permission', 'pagePermission', 'rolePermission'],
  'editor-token': ['permission', 'pagePermission']
}
