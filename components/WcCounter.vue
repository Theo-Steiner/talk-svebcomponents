<script setup lang="ts">
import { ref } from "vue";
import "../snippets/my-counter.js";
const stepSize = ref(1);
</script>

<template>
  <div class="flex flex-col items-center">
    <my-counter :step-size.attr="stepSize" />
    <input type="range" v-model="stepSize" />
  </div>
</template>
