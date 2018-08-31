import { $ajax } from '@/service/ajax'
import api from '@/service/api'
import storage from '@/service/storage'

const state = {

}

const getters = {

}

const actions = {
  login (context,data){
    return new Promise((resolve,rejects)=>{
      $ajax(api.login, {
        data: data
      }).then(({data})=>{
        console.log(data)
        if(data.status==0){
          storage.set('token',data.data.token)
          storage.set('userinfo',JSON.stringify(data.data))
        }
        resolve(data);
      })
    }) 
  }
}

const mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}