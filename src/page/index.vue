<template>
  <!--全局入口2-->
  <el-container>
    <el-header>
      <div class="header clearfix">
        <div class="fl logo">Vue-Admin</div>
        <div class="fr">
          <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group> -->
          <a href="javascript:;" v-on:click="logout">登出</a>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-active="$route.path" :router="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="0">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/user/list">用户列表</el-menu-item>
            </el-menu-item-group>
            <!-- <el-menu-item-group>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">组件</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index">Welcome</el-menu-item>
              <el-menu-item index="/icon">Icon 图标</el-menu-item>
              <el-menu-item index="/table">Table 表格</el-menu-item>
              <el-menu-item index="/ueditor">Ueditor 编辑器</el-menu-item>
              <el-menu-item index="/button">Button 按钮</el-menu-item>
              <el-menu-item index="/form">Form 表单</el-menu-item>
              <el-menu-item index="/notice">Notice 提示</el-menu-item>
              <el-menu-item index="/upload">Upload 上传</el-menu-item>
              <el-menu-item index="/page">Pagination 分页</el-menu-item>
              <el-menu-item index="/progress">Progress 进度条</el-menu-item>
            </el-menu-item-group>
             <el-menu-item-group>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu> 
          </el-submenu> -->
          <!-- <el-menu-item index="#">
            <i class="el-icon-more"></i>
            <a href="http://element.eleme.io/#/zh-CN/component/layout" target="_blank"><span slot="title">更多使用文档</span></a>
          </el-menu-item> -->
        </el-menu>
      </el-aside>
      <el-main>
        <!-- <transition name="slide-fade"> -->
        <router-view/>
        <!-- </transition> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
         isCollapse: false,
         active: this.$route.path
      }
    },
    //对应 Actions中changeMsg方法|| 映射this.changeMsg() 为 this.$store.dispatch('changeMsg')
    created() {
      let that = this;
      console.log(this.$store.state);
      /*
      setInterval(function(){
        that.times++;
      },1000)
      console.log(that)
      */
     // that.$goRoute('/index')

      // const promist = new Promise(function(resolve,reject){
      //   if(1==1){
      //       resolve("resolve");
      //   }else{
      //       reject(reject);
      //   }
      // })

      // promist.then(function(data){
      //   console.log(data);
      // })

      // function getList(){
      //   return that.$ajax('/ipl-pl/teacher/courseware/list?userToken=20180613114242a93a2cb81cad4f32889efb44a0cc8cbb',{
      //     data: {
      //       a: '1'
      //     }
      //   })
      // }


      // this.axios.all([getList(),getList()]).then(function(a){
      //   console.log(a);
      //   setTimeout(function(){
      //     that.fullscreenLoading = false;
      //   },1000)

      // },function(){
      //   console.log(1111);
      // })

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      logout () {
        this.$confirm('退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //comfirm
          localStorage.clear();
          this.$goRoute('/login');
        }).catch(() => {
          //cancel
        });

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "scoped" css作用域只在本页面 -->
<style lang="scss">
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
// .slide-fade-enter-active {
//   transition: all .3s ease;
// }
// .slide-fade-leave-active {
//
// }
// .slide-fade-enter
// /* .slide-fade-leave-active for below version 2.1.8 */ {
//   transform: translateX(10px);
//   opacity: 0;
// }

</style>
