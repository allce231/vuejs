<template>
<div>
  hi~ list
</div>
</template>

<script>
import Vue from 'vue'
import navHmtl from '@/components/nav'
Vue.component('navHmtl',navHmtl)

export default {
  data () {
    return {
      id: this.$route.params.id
    }
  }
}

</script>

<style>

</style>
