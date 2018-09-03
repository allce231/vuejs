import { $ajax } from '@/service/ajax'
import api from '@/service/api'
import storage from '@/service/storage'

const state = {

}

const getters = {

}

const actions = {
  getUserList ( context, data ) {
    return new Promise( (resolve, reject) => {
      $ajax(api.userList,{
        data: data
      }).then( ({data}) =>{
        resolve(data)
      }).catch( (e) =>{
        reject(e)
      })
    })
  }
}

console mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}