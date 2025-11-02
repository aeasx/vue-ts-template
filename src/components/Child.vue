<script setup lang="ts">
import { ref } from 'vue';

const data = ref('我是子组件向父组件传递的数据');
</script>

<template>
  <slot :child-data="data" />
</template>
