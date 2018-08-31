import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  //mode: 'history',//去掉url#
  routes: [{
      path: '/',
      name: 'index',
      meta: {
        /*标明需要登录*/
        auth: true
      },
      component: resolve => require(['@/page/index'], resolve),
      redirect: '/index', //重定向至/index
      children:[{
          path: '/index',
          name: 'mainindex',
          meta: {
            title: 'index',
            auth: true
          },
          component: resolve => require(['@/page/tools/index'], resolve)
        },{
          path: '/icon',
          name: 'icon',
          meta: {
            title: 'icon',
            auth: true
          },
          component: resolve => require(['@/page/tools/icon'], resolve)
        },{
          path: '/table',
          name: 'table',
          meta: {
            title: 'table',
            auth: true
          },
          component: resolve => require(['@/page/tools/table'], resolve)
        },{
          path: '/button',
          name: 'button',
          meta: {
            title: 'button',
            auth: true
          },
          component: resolve => require(['@/page/tools/button'], resolve)
        },{
          path: '/form',
          name: 'form',
          meta: {
            title: 'form',
            auth: true
          },
          component: resolve => require(['@/page/tools/form'], resolve)
        },{
          path: '/notice',
          name: 'notice',
          meta: {
            title: 'notice',
            auth: true
          },
          component: resolve => require(['@/page/tools/notice'], resolve)
        },{
          path: '/upload',
          name: 'upload',
          meta: {
            title: 'upload',
            auth: true
          },
          component: resolve => require(['@/page/tools/upload'], resolve)
        },{
          path: '/page',
          name: 'page',
          meta: {
            title: 'page',
            auth: true
          },
          component: resolve => require(['@/page/tools/page'], resolve)
        },{
          path: '/progress',
          name: 'progress',
          meta: {
            title: 'progress',
            auth: true
          },
          component: resolve => require(['@/page/tools/progress'], resolve)
        }
      ]
    },{
      path: '/login',
      name: 'login',
      meta: {
        title: '登录页'
      },
      component: resolve => require(['@/page/login'], resolve)
    }
  ]
})
