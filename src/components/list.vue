<template>
<div>
  <navHmtl></navHmtl>
  hi~ list {{id}}
  {{gettersMsg}}
</div>
</template>

<script>
import Vue from 'vue'
import navHmtl from '@/components/nav'
Vue.component('navHmtl',navHmtl)

import  {mapGetters} from 'vuex'

export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapGetters(['gettersMsg'])
  }
}

</script>

<style>

</style>
