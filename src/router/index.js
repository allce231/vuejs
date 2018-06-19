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
      component: resolve => require(['@/components/index'], resolve),
      redirect: '/index', //重定向至/index
      children:[{
          path: '/index',
          name: 'index',
          meta: {
            title: 'index',
            auth: true
          },
          component: resolve => require(['@/components/tools/index'], resolve)
        },{
          path: '/icon',
          name: 'icon',
          meta: {
            title: 'icon',
            auth: true
          },
          component: resolve => require(['@/components/tools/icon'], resolve)
        },{
          path: '/table',
          name: 'table',
          meta: {
            title: 'table',
            auth: true
          },
          component: resolve => require(['@/components/tools/table'], resolve)
        },{
          path: '/ueditor',
          name: 'ueditor',
          meta: {
            title: 'ueditor',
            auth: true
          },
          component: resolve => require(['@/components/tools/ueditor'], resolve)
        },{
          path: '/button',
          name: 'button',
          meta: {
            title: 'button',
            auth: true
          },
          component: resolve => require(['@/components/tools/button'], resolve)
        },{
          path: '/form',
          name: 'form',
          meta: {
            title: 'form',
            auth: true
          },
          component: resolve => require(['@/components/tools/form'], resolve)
        },{
          path: '/notice',
          name: 'notice',
          meta: {
            title: 'notice',
            auth: true
          },
          component: resolve => require(['@/components/tools/notice'], resolve)
        },{
          path: '/upload',
          name: 'upload',
          meta: {
            title: 'upload',
            auth: true
          },
          component: resolve => require(['@/components/tools/upload'], resolve)
        },{
          path: '/page',
          name: 'page',
          meta: {
            title: 'page',
            auth: true
          },
          component: resolve => require(['@/components/tools/page'], resolve)
        },{
          path: '/progress',
          name: 'progress',
          meta: {
            title: 'progress',
            auth: true
          },
          component: resolve => require(['@/components/tools/progress'], resolve)
        }
      ]
    },{
      path: '/login',
      name: 'login',
      meta: {
        title: '登录页'
      },
      component: resolve => require(['@/components/login'], resolve)
    }
  ]
})
