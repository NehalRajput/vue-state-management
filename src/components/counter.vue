<script setup>
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>

<template>
  <h2>Count: {{ counter.count }}</h2>
  <button @click="counter.increment">Increment</button>
</template>
