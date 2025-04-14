<script setup>
import { useCartStore } from '@/stores/cart'

const cart = useCartStore() // Access the cart store

// Sample product to add to cart
const product = { id: 1, name: 'Laptop', price: 999.99 }
</script>

<template>
  <h2>Shopping Cart</h2>
  <ul>
    <li v-for="item in cart.items" :key="item.id">
      {{ item.name }} - ${{ item.price }}
      <button @click="cart.removeItem(item.id)">Remove</button>
    </li>
  </ul>
  <p>Total: ${{ cart.cartTotal }}</p>
  <p>Items in Cart: {{ cart.itemCount }}</p>
  <button @click="cart.addItem(product)">Add Laptop to Cart</button>
</template>
