<template>
  <div class="hello" v-loading.fullscreen.lock="fullscreenLoading">
    <navHmtl></navHmtl>
    <h1>{{ msg }}</h1>
    <h2>{{'Essential Links' | uplowCase('up')}}</h2>
    {{times}}
    <!-- 2017-08-11 21:21 -->
    <h1>{{ new Date() | dateFormat }}</h1>

    <!-- 2017年08月11日 21:21:05 -->
    <h1>{{ new Date() }}</h1>

    <button @click="changeMsg">点我改变数据</button>
 <p>gettersMsg数据目前是: {{ gettersMsg }} {{ gettersMsg2 }}</p>


  <div class="block">
   <span class="demonstration">默认</span>
   <el-date-picker
     v-model="value1"
     type="date"
     :picker-options="pickerOptions1"
     :change = "change"
     placeholder="选择日期">
   </el-date-picker>
  </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      times: 1,
      fullscreenLoading: true,

      pickerOptions1: {
        onPick () {
          console.log(1111222333);
        }
      },
      value1: '',
      value2: '',
    }
  },
  computed: {...mapGetters(['gettersMsg','gettersMsg2'])},
  //对应getters.技术中的gettersMsg
  methods: {
    ...mapActions(['changeMsg']),
    change: function(){
      console.log(1111);
    }
},
  //对应 Actions中changeMsg方法|| 映射this.changeMsg() 为 this.$store.dispatch('changeMsg')
  created () {
    let that = this;
    /*
    setInterval(function(){
      that.times++;
    },1000)
    console.log(that)
    */
    const promist = new Promise(function(resolve,reject){
      if(1==1){
          resolve("resolve");
      }else{
          reject(reject);
      }
    })

    promist.then(function(data){
      console.log(data);
    })

    function getList(){
      return that.$ajax('/ipl-pl/teacher/courseware/list?userToken=20180613114242a93a2cb81cad4f32889efb44a0cc8cbb',{
        data: {
          a: '1'
        }
      })
    }


    this.axios.all([getList(),getList()]).then(function(a){
      console.log(a);
      setTimeout(function(){
        that.fullscreenLoading = false;
      },1000)

    },function(){
      console.log(1111);
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "scoped" css作用域只在本页面 -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
