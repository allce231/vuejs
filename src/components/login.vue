<template>
<div class="login-bg">
  <div class="login">
    <el-form :model="form1" status-icon  label-width="100px">
    <ul>
      <li class="top">用户登录</li>
      <li><el-input v-model="form1.username" placeholder="admin"></el-input></li>
      <li><el-input v-model="form1.pwd" placeholder="admin"></el-input></li>
      <li><el-button type="primary" @click="submitForm(form1)">提交</el-button></li>
    </ul>
    </el-form>
  </div>
</div>
</template>

<script>
import Vue from 'vue'

import  {mapGetters} from 'vuex'

export default {
  data () {
    return {
      form1: {
        username: '',
        pwd: ''
      }
    }
  },
  computed: {
    ...mapGetters(['gettersMsg'])
  },
  methods: {
    submitForm (form1) {
      var redirect = this.$route.query.redirect;
      if(!form1.username){
        this.$message({
          showClose: true,
          message: '请输入用户名哦',
          type: 'error'
        });
        return;
      }
      if(!form1.pwd){
        this.$message({
          showClose: true,
          message: '请输入密码哦',
          type: 'error'
        });
        return;
      }
      localStorage.token = 'test';
      if(redirect){
        this.$goRoute(redirect);
      }else{
        this.$goRoute('/');
      }

    }
  }
}

</script>

<style lang="scss" scoped>
  .login-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('~@/assets/login-bg.svg')!important;
  }
  .login{
    width: 400px;
    height: 300px;
    position: absolute;
    left: 50%;
    margin-left: -200px;
    top: 50%;
    margin-top:-150px;
  }
  ul{
    li{
      margin: 20px 30px 0;
      &.top{
        font-size: 20px;
        font-weight: bold
      }
    }
  }
  .el-button{
    display: block;
    width: 100%
  }
</style>
