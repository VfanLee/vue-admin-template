module.exports.token = {
  admin: 'admin-token',
  editor: 'editor-token'
}

module.exports.user = {
  'admin-token': {
    name: 'Super Admin',
    introduction: 'I am a super administrator',
    avatar: 'https://picsum.photos/24/24',
    role: 'admin'
  },
  'editor-token': {
    name: 'Normal Editor',
    introduction: 'I am an editor',
    avatar: 'https://picsum.photos/24/24',
    role: 'editor'
  }
}

module.exports.menu = {
  admin: [],
  editor: []
}
