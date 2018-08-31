<template>
<div>
  <div class="block">
    <span class="demonstration">普通</span>
    <el-pagination
      layout="prev, pager, next"
      :total="1000"
      @current-change="changePage"
      >
    </el-pagination>
  </div>
  <div class="">
    <span class="demonstration">带背景</span>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    changePage(page) {
      console.log(page);
    }
  }
}

</script>

<style>

</style>
