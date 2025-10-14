<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue';
import { useStorage } from '@/composables/useStorage';


let food = useStorage("food", "tacos")
let age = useStorage("age")
let obj = useStorage("obj", {blah: "hi"});
setTimeout(()=> {
  obj.value.blah="hello";
}, 2000);

</script>

<template>
  <main>
    <TheWelcome />
  </main>
  <p>My favourite food is: {{food}}</p>
  <input type="text" v-model="food">

  <p>My age is: {{age}}</p>
  <input type="text" v-model="age">
</template>
