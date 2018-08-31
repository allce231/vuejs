import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import auth from './modules/auth'
import error from './modules/error'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart,
    auth,
    error
  }
})
export default store
