import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import list from '@/components/list'

Vue.use(Router)

//是否登录验证


export default new Router({
  //mode: 'history',//去掉url#
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/components/index'],resolve)
    },
    {
      path: '/list/:id',
      name: 'list',
      component: resolve => require(['@/components/list'],resolve)
    },{
      path: '/teacher',
      name: 'teacher',
      meta:{
        /*标明需要登录*/
        auth:true
      },
      {
        path: '/teacher/abc',
        name: 'teacher',
        meta:{
          /*标明需要登录*/
          auth:true
        },
      component: resolve => require(['@/components/teacher/index'],resolve),
      children: [
        {
          path: 'login',
          name: 'teacherlogin',
          component: resolve => require(['@/components/teacher/login'],resolve)
        }
      ]
    }
  ]
})
