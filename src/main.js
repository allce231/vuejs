// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/sass/reset.css'
import './assets/sass/main.scss'
import axios from 'axios'
import promise from 'es6-promise'
import * as filters from './filters/' //过滤器
import store from './store/'
import ElementUI from 'element-ui'  //饿了么vue template
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

promise.polyfill() //promise 兼容ie9,10

//环境变量
var env = process.env.NODE_ENV
const api = {}
if(env=='development'){
  api.serverUrl = 'http://120.78.151.240:3722'
}
if(env=='production'){
  api.serverUrl = 'http://120.78.151.240:3722'
}

//全局注册nav组件
import navHmtl from '@/components/nav'
Vue.component('navHmtl',navHmtl)


// 遍历所有导出的过滤器并添加到全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

/*
 *  封装ajax  使用axios 使用教程 https://www.kancloud.cn/yunye/axios/234845
 *  params url = string
 *  params opt = {}
 *  return promise
 */

Vue.prototype.$ajax = function(url,opt){
  return axios(Object.assign({
    method: 'POST',
    url:  api.serverUrl + url
  },opt))
}

Vue.prototype.axios = axios

//
// 封装 ajax end

//是否需要登录验证
router.beforeEach(function(to,from,next){
  if(to.meta.auth == true){
    //如果需要登录
    if(!localStorage.token){
      next('/login?redirect='+to.fullPath)
    }else{
      next()
    }
  }else{
    next()
  }
})

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

Vue.config.productionTip = false

var app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    console.log('created')
  }
})
