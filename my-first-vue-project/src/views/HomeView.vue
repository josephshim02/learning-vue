<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue';



let message = ref("Hello world");
setTimeout(() => {
  message.value = "new message";
}, 2000);



</script>

<template>
  <main>
    <TheWelcome />
  </main>
  <p>{{message}}</p>
  <input type="text" v-model="message">
</template>
