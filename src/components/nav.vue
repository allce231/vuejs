<template>
<div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1" v-on:click="$goRoute('/')">首页</el-menu-item>
    <el-menu-item index="2" v-on:click="$goRoute('/list/111222')">列表页</el-menu-item>
    <el-menu-item index="3"><a href="">订单管理</a></el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      nav: [
        {
          text: '首页',
          link: '/'
        },
        {
          text: '列表',
          link: '/list/11111'
        },
        {
          text: '详情',
          link: '/detail'
        }
      ]
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>

</style>
