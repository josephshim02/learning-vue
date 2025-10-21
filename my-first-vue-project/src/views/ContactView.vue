<script setup>
import test from '@/components/test.vue';
import info from '@/components/info.vue';
import {person} from '@/stores/personStore.js'
import { ref, onMounted,onBeforeUnmount, provide } from 'vue';
const blah = ref(0)
const cardRef = ref(null);
const cardWidth = ref(200);
let resizeObserver = null;

onMounted(() => {
  if (cardRef.value) {
    resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const width = entry.contentRect.width
        if (width > 0) cardWidth.value = width
      }
    })
    resizeObserver.observe(cardRef.value)
  };
})

onBeforeUnmount(() => {
  if (resizeObserver && cardRef.value) {
    resizeObserver.unobserve(cardRef.value)
    resizeObserver.disconnect()
  }
});


provide('cardWidth', cardWidth);
</script>

<template>
  <div class="contact">
    <h1>This is a contact page</h1>
    <info/>
  </div>
  <p> {{person.name}}</p>
  <p> {{person.age}}</p>
  <button @click="person.name='shoeyan'">Change name</button>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
