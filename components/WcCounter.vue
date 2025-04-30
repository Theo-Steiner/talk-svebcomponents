<script setup lang="ts">
import { ref } from "vue";
import "../snippets/my-counter.js";
const increments = ref(1);
</script>

<template>
  <div class="flex flex-col items-center">
    <my-counter :increments.attr="increments"></my-counter>
    <input type="range" v-model="increments" />
  </div>
</template>
