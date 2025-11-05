<script setup lang="ts">
import { onMounted, shallowRef, triggerRef } from 'vue';

const user = shallowRef({ name: 'Alice', age: 28 });
onMounted(() => {
  user.value.name = 'Bob';
});
function handleClick() {
  triggerRef(user);
}
</script>

<template>
  <h1>HomeView</h1>
  <div class="w-[100px] h-[100px] bg-red-400" />
  <div class="w-[300px] h-6 bg-pink-300">
    {{ user.name }}
  </div>
  <button @click="handleClick">
    手动触发更新
  </button>
</template>
