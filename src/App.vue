<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from "@/store"
import { mapGetters } from 'vuex'

export default {
  created: function() {

  },
  computed: {
    ...mapGetters("error",{
      errorStatus: "errorStatus",
      errorMsg: "errorMsg"
    })
  },
  watch: {
    errorStatus (val){
      this.$notify.error({
        title: '温馨提示',
        message: this.errorMsg
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
