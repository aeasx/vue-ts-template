<!-- eslint-disable no-console -->
<!-- eslint-disable antfu/top-level-function -->
<script setup lang="ts">
import { nextTick, ref } from 'vue';

const count = ref(0);
const increment = async () => {
  count.value++;

  // DOM还未更新
  console.log(document.getElementById('counter')?.textContent); // 0

  await nextTick();

  // DOM此时已经更新
  console.log(document.getElementById('counter')?.textContent); // 1
};
</script>

<template>
  <button id="counter" class="w-[100px] h-[70px] bg-red-400" @click="increment">
    {{ count }}
  </button>
</template>
