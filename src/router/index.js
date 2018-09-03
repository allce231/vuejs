import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  //mode: 'history',//去掉url#
  routes: [{
      path: '/',
      name: 'index',
      component: resolve => require(['@/page/index'], resolve),
      redirect: '/index', //重定向至/index
      children:[{
          path: '/user',
          name: 'mainuser',
          meta: {
            title: 'userlayout',
            /*标明需要登录*/
            auth: true
          },
          component: resolve => require(['@/page/layout'], resolve),
          children:[{
            path: 'list',
            name: 'user-list',
            meta: {
              title: '用户列表',
              auth: true
            },
            component: resolve => require(['@/page/user/list'], resolve)
          }]
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
