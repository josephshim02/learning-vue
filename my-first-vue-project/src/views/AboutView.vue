<script setup>
  import TabbableTeaxtarea from '@/components/TabbableTeaxtarea.vue';
  import { ref } from 'vue';

  let textAreaValue = ref("test")
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <tabbable-teaxtarea v-model="textAreaValue" style="width: 100%; height:300px;"/>
  </div>
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
