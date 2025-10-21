<script setup>
import { counter } from '@/stores/counterStore';
</script>


<template>
  <p>I am counter view</p>
  <p>{{counter.count}}</p>
  <button @click="counter.increment()">Increment</button>
</template>
