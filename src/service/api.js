import config from '@/config.js'

const api = {};

api.login = config.serverUrl + '/login'  //登录
api.userList = config.serverUrl + '/api/v1/user'  //用户列表 post

export default api;
