<script setup>
//import { counter } from '@/stores/counterStore';
import { useCounterStore } from '@/stores/useCounterStore';

let counter = useCounterStore();
</script>


<template>
  <p>I am counter view</p>
  <p>{{counter.count}}</p>
  <button @click="counter.increment" :disabled="(counter.remaining == 0)">Increment ({{counter.remaining}} remaining)</button>
</template>
