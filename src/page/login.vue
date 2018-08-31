<template>
<div class="login-bg">
  <div class="login">
    <el-form action="" :model="form1" status-icon  label-width="100px">
    <ul>
      <li class="top">用户登录</li>
      <li><el-input v-model="form1.username" placeholder="admin"></el-input></li>
      <li><el-input v-model="form1.password" placeholder="admin"></el-input></li>
      <li><el-button type="primary" @click="submitForm(form1)">提交</el-button></li>
    </ul>
    </el-form>
  </div>
  
</div>
</template>

<script>
import Vue from 'vue'
import  {mapGetters} from 'vuex'
import storage from '@/service/storage'
import store from '@/store'
import md5 from 'js-md5'

export default {
  data () {
    return {
      form1: {
        username: 'admin',
        password: 'admin'
      }
    }
  },
  computed: {
    ...mapGetters(['gettersMsg'])
  },
  mounted (){
    const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = 'https://ssl.captcha.qq.com/TCaptcha.js';
          document.body.appendChild(s);
  },
  methods: {
    submitForm (form1) {
      
      const captcha = new TencentCaptcha('2047063832', this.captchaCallback); 
      if(!form1.username){
        this.$message({
          showClose: true,
          message: '请输入用户名哦',
          type: 'error'
        });
        return;
      }
      if(!form1.password){
        this.$message({
          showClose: true,
          message: '请输入密码哦',
          type: 'error'
        });
        return;
      }

      let errorPwd = storage.get('error_pwd');

      if(errorPwd>0){
        captcha.show();
      }else{
        this.login()
      }
    },
    login (ticket){
      let pwd = md5(this.form1.password);
      let errorPwd = storage.get('error_pwd');
      store.dispatch("auth/login", {
        username: this.form1.username,
        password: pwd,
        ticket: ticket
      }).then((data)=>{
        if(data.status==0){
          this.$message.success('登录成功');
          var redirect = this.$route.query.redirect;
          if(redirect){
            this.$goRoute(redirect);
          }else{
            this.$goRoute('/');
          }
          storage.set('error_pwd',0);
        }else{
          errorPwd = errorPwd ? ++errorPwd : 1;
          storage.set('error_pwd',errorPwd);
          this.$message.error(data.msg);
        }
      })
    },
    captchaCallback (e){     
      if(e.ret === 0){
        this.login(e.ticket)
      }else{
        this.$message.error('请选择正确的验证码');
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
