webpackJsonp([4],{qE17:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"item"},[n("h3",[t._v("Message 消息提示")]),t._v(" "),n("p",{staticClass:"tips"},[t._v("常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。")]),t._v(" "),n("el-button",{attrs:{plain:!0},on:{click:t.open5}},[t._v("消息")]),t._v(" "),n("el-button",{attrs:{plain:!0},on:{click:t.open6}},[t._v("成功")]),t._v(" "),n("el-button",{attrs:{plain:!0},on:{click:t.open7}},[t._v("警告")]),t._v(" "),n("el-button",{attrs:{plain:!0},on:{click:t.open8}},[t._v("错误")])],1),t._v(" "),n("div",{staticClass:"item"},[n("h3",[t._v("MessageBox 弹框")]),t._v(" "),n("p",{staticClass:"tips"},[t._v("模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。")]),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:t.open2}},[t._v("点击打开 Message Box")])],1),t._v(" "),n("div",{staticClass:"item"},[n("h3",[t._v("Notification 通知")]),t._v(" "),n("p",{staticClass:"tips"},[t._v("悬浮出现在页面角落，显示全局的通知提醒消息。")]),t._v(" "),n("el-button",{attrs:{plain:""},on:{click:t.openFI1}},[t._v(" 成功 ")]),t._v(" "),n("el-button",{attrs:{plain:""},on:{click:t.openFI2}},[t._v(" 警告 ")]),t._v(" "),n("el-button",{attrs:{plain:""},on:{click:t.openFI3}},[t._v(" 消息 ")]),t._v(" "),n("el-button",{attrs:{plain:""},on:{click:t.openFI4}},[t._v(" 错误 ")])],1)])},staticRenderFns:[]};var i=n("VU/8")({data:function(){return{}},methods:{open5:function(){this.$message({showClose:!0,message:"这是一条消息提示"})},open6:function(){this.$message({showClose:!0,message:"恭喜你，这是一条成功消息",type:"success"})},open7:function(){this.$message({showClose:!0,message:"警告哦，这是一条警告消息",type:"warning"})},open8:function(){this.$message({showClose:!0,message:"错了哦，这是一条错误消息",type:"error"})},open2:function(){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},openFI1:function(){this.$notify({title:"成功",message:"这是一条成功的提示消息",type:"success"})},openFI2:function(){this.$notify({title:"警告",message:"这是一条警告的提示消息",type:"warning"})},openFI3:function(){this.$notify.info({title:"消息",message:"这是一条消息的提示消息"})},openFI4:function(){this.$notify.error({title:"错误",message:"这是一条错误的提示消息"})}}},s,!1,function(t){n("rKjy")},"data-v-e078dcc8",null);e.default=i.exports},rKjy:function(t,e){}});
//# sourceMappingURL=4.9b9a1c80ab7b77348ab2.js.map