<template>
  <textarea
    @keydown.tab.prevent="onTab"
    v-text="modelValue"
    @keyup="update"
  />
</template>

<script setup>
  import { defineEmits, defineProps } from 'vue';

  defineProps({
    modelValue: String
  });

  defineEmits(['update:modelValue']);

  function update(e) {
    emit('update:modeValue', e.target.value);
  }

  function onTab(e) {
    let textarea = e.target;
    let val = textarea.value,
      start = textarea.selectionStart,
      end = textarea.selectionEnd;
    textarea.value = val.substring(0,start) + "\t" + val.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + 1;
  }
</script>
