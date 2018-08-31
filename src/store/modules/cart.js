import { ADDTOCART } from '@/store/mutations.type'

const state = {
  item: [{
    name: 'Iphone 8',
    price: 6888,
    num: 10
    },{
      name: '小米8',
      price: 1799,
      num: 10
    }
  ],
  checkoutStatus: null
}

const getters = {
  list: (state) => state.item
}

const actions = {
  addToCart ({commit}) {
    console.log('product');
    commit('ADDTOCART')
  }
}

const mutations = {
  [ADDTOCART] (state) {
    state.item.push({
      name: '小米8se',
      price: 1299,
      num: 1
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
