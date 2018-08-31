const state = {
  errorStatus: 0,  //0不显示  1显示
  errorMsg: '系统出错，请稍后再试！'
}

const getters = {
  errorStatus: (state) => state.errorStatus,
  errorMsg: (state) => state.errorMsg,
}

const actions = {
  changeStatus ({commit},status){
    commit('CHANGE_STATUS',status)
  },
  changeErrorMsg ({commit},msg){
    commit('CHANGE_ERRORMSG',msg)
  }
}

const mutations = {
  CHANGE_STATUS(state,status){
    state.errorStatus = status;
  },
  CHANGE_ERRORMSG(state,msg){
    state.errorMsg = msg
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
