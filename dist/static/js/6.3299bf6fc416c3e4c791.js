webpackJsonp([6],{K31e:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("Dd8w"),o=s.n(r),a=(s("7+uW"),s("NYxO")),n={data:function(){return{form1:{username:"",pwd:""}}},computed:o()({},Object(a.b)(["gettersMsg"])),methods:{submitForm:function(e){var t=this.$route.query.redirect;e.username?e.pwd?(localStorage.token="test",t?this.$goRoute(t):this.$goRoute("/")):this.$message({showClose:!0,message:"请输入密码哦",type:"error"}):this.$message({showClose:!0,message:"请输入用户名哦",type:"error"})}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-bg"},[s("div",{staticClass:"login"},[s("el-form",{attrs:{model:e.form1,"status-icon":"","label-width":"100px"}},[s("ul",[s("li",{staticClass:"top"},[e._v("用户登录")]),e._v(" "),s("li",[s("el-input",{attrs:{placeholder:"admin"},model:{value:e.form1.username,callback:function(t){e.$set(e.form1,"username",t)},expression:"form1.username"}})],1),e._v(" "),s("li",[s("el-input",{attrs:{placeholder:"admin"},model:{value:e.form1.pwd,callback:function(t){e.$set(e.form1,"pwd",t)},expression:"form1.pwd"}})],1),e._v(" "),s("li",[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm(e.form1)}}},[e._v("提交")])],1)])])],1)])},staticRenderFns:[]};var i=s("VU/8")(n,l,!1,function(e){s("lSZu")},"data-v-a14371d6",null);t.default=i.exports},lSZu:function(e,t){}});
//# sourceMappingURL=6.3299bf6fc416c3e4c791.js.map