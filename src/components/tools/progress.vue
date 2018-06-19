<template>
<div>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
  <el-progress type="circle" :percentage="percent" :status="status"></el-progress>
</div>
</template>

<script>

export default {
  data () {
    return {
      percent: 0,
      status: ""
    }
  },
   created () {
    let that = this;
    let interval = setInterval(function(){
      that.percent++;
      if(that.percent==100){
        that.status = 'success';
        clearInterval(interval);
      }
    },100)
  }
}

</script>

<style scoped>
.el-progress--line {
    margin-bottom: 15px;
    width: 350px;
}
</style>
