<template>
<div>
    <h1>欢迎使用！</h1>
    <test :test="test"></test>
    <div class="" v-for="item in list">
      {{item.name}}
    </div>

    <el-button type="primary" @click="addCart">添加购物车</el-button>
</div>
</template>

<script>
import test from "@/components/test"
import {mapGetters, mapState , mapActions} from 'vuex'
import store from '@/store'
export default {
  data () {
    return {
      test: "1111222"
    }
  },
  components: {
      test
  },
  computed: {
    ...mapGetters('cart',{
      list: 'list'
    }),
    ...mapState('cart',{
      aaa: 'item'
    })
  },
  methods: {
    ...mapActions('cart',['addToCart']),
    addCart () {
      store.dispatch('cart/addToCart')
    }
  },
  created () {
    var that = this;
    this.interval = setInterval(function(){
      that.test = new Date();
    },1000)
  },
  beforeMount () {
    console.log('beforeMount');
  },
  beforeDestroy () {
  },
  destroyed () {
    clearInterval(this.interval);
  }
}

</script>

<style scoped>
  h1{
    text-align: center;
    font-size: 24px;
  }
</style>
