import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),

  actions: {
    addItem(product) {
      this.items.push(product) 
    },

    removeItem(productId) {
      this.items = this.items.filter(item => item.id !== productId) 
    },
  },

  getters: {
    cartTotal: (state) => {
      // Get total price of items in the cart
      return state.items.reduce((total, item) => total + item.price, 0)
    },

    itemCount: (state) => {
      // Get the number of items in the cart
      return state.items.length
    },
  },
})
