<template>
  <div class="">
    <div class="item">
      <h3>Message 消息提示</h3>
      <p class="tips">常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
      <el-button :plain="true" @click="open5">消息</el-button>
      <el-button :plain="true" @click="open6">成功</el-button>
      <el-button :plain="true" @click="open7">警告</el-button>
      <el-button :plain="true" @click="open8">错误</el-button>
    </div>

    <div class="item">
      <h3>MessageBox 弹框</h3>
      <p class="tips">模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。</p>
      <el-button type="text" @click="open2">点击打开 Message Box</el-button>
    </div>

    <div class="item">
      <h3>Notification 通知</h3>
      <p class="tips">悬浮出现在页面角落，显示全局的通知提醒消息。</p>
      <el-button plain @click="openFI1"> 成功 </el-button>
      <el-button  plain @click="openFI2"> 警告 </el-button>
      <el-button plain @click="openFI3"> 消息 </el-button>
      <el-button plain @click="openFI4"> 错误 </el-button>
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
    open5() {
      this.$message({
        showClose: true,
        message: '这是一条消息提示'
      });
    },

    open6() {
      this.$message({
        showClose: true,
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      });
    },

    open7() {
      this.$message({
        showClose: true,
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      });
    },

    open8() {
      this.$message({
        showClose: true,
        message: '错了哦，这是一条错误消息',
        type: 'error'
      });
    },

    open2() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },

    //通知
    openFI1() {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      });
    },

    openFI2() {
      this.$notify({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning'
      });
    },

    openFI3() {
      this.$notify.info({
        title: '消息',
        message: '这是一条消息的提示消息'
      });
    },

    openFI4() {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息'
      });
    }
  }
}

</script>

<style scoped>
.item>h3 {
  margin: 20px 0 10px;
  font-size: 20px;
}
.tips{
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}
.item {
  margin-bottom: 30px;
}
</style>
