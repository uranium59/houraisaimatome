export const state = () => ({
  cart: {},
  isCartExist: false,
})

export const mutations = {
  changeOrder (state, { circlenumber, orderinfo }) {
    state.cart[circlenumber] = orderinfo
    if(!orderinfo || orderinfo.length < 1) {
      delete state.cart[circlenumber]
    }
    state.isCartExist = Object.keys(state.cart).length > 0
  }
}

export const getters = {
  getOrderExist: (state) => {
    return state.isCartExist
  },
  getAllOrderAsString: (state) => () => {
    return ''
  },
  getCircleOrder: (state) => (circlenumber) => {
    console.log('cart: ', state.cart)
    return state.cart[circlenumber]
  }
}
