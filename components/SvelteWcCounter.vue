<script setup lang="ts">
import { ref } from "vue";
import "../snippets/my-svelte-counter.js";
const increments = ref(1);
</script>

<template>
  <div class="flex flex-col">
    <my-svelte-counter :increments.attr="increments" />
    <input type="range" v-model="increments" />
  </div>
</template>
