<template>
  <div>
    <h1>Welcome to the Shop</h1>
    
    <div>
      <h2>Your Shopping Cart</h2>
      
      <!-- If there are no items in the cart -->
      <p v-if="cart.items.length === 0">Your cart is empty.</p>

      <!-- Display cart items -->
      <ul v-else>
        <li v-for="item in cart.items" :key="item.id">
          {{ item.name }} - ${{ item.price }}
          <button @click="cart.removeItem(item.id)">Remove</button>
        </li>
      </ul>

      <!-- Cart Summary -->
      <p>Total: ${{ cart.cartTotal }}</p>
      <p>Items in Cart: {{ cart.itemCount }}</p>
    </div>

    <!-- Add a product to the cart -->
    <div>
      <button @click="addProductToCart">Add Laptop to Cart</button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()

// Array of products
const products = [
  { id: 1, name: 'Laptop', price: 999.99 },
//  { id: 2, name: 'Mouse', price: 19.99 }
]

function addProductToCart() {
  cart.addItem(products[0])
 // cart.addItem(products[1])
   // Add the first product (Laptop) to the cart
}
</script>

<style>
h1 {
  text-align: center;
  color: #333;
}

h2 {
  color: #555;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
