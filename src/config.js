//环境变量
let env = process.env.NODE_ENV;
let protocol = window.location.protocol;
let hostname = window.location.hostname;
let port  = window.location.port;
let apiUrl = '';


const api = {
  serverUrl: 'http://localhost:7001',
  tencentCaptcha: {
    appid: '2047063832'
  }
}


export default api;
