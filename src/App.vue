<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Child from './components/Child.vue';
</script>

<template>
  <div>
    <h1>App.vue</h1>
    <Icon icon="mdi-light:home" />
    <Child v-slot="slotProps">
      来自子组件的数据
      <span class="text-red-400">
        {{ slotProps.childData }}
      </span>
    </Child>
  </div>
</template>
