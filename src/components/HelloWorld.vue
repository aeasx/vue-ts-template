<script setup lang="ts">
import { onMounted } from 'vue';
import { useAlertsStore } from '@/store';

const alertStore = useAlertsStore();

onMounted(() => {});
</script>

<template>
  <span class="bg-red-300">HelloWorld Component</span>
  <h1>count={{ alertStore.$state.count }}</h1>
  <h1>doubleCount={{ alertStore.doubleCount }}</h1>
  <button @click="alertStore.increment">
    +1
  </button>
</template>

<style lang="scss" scoped></style>
