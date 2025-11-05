<script setup lang="ts">
import { onMounted, ref, shallowRef, triggerRef } from 'vue';

const user = shallowRef({ name: 'Alice', age: 28 });
onMounted(() => {
  user.value.name = 'Bob';
});
function handleClick() {
  triggerRef(user);
}

const value1 = ref();
const value2 = ref();
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
  <el-button type="primary">
    Primary
  </el-button>
  <el-button type="success">
    Success
  </el-button>
  <el-button type="info">
    Info
  </el-button>
  <el-button type="warning">
    Warning
  </el-button>
  <el-button type="danger">
    Danger
  </el-button>
  <div class="example-basic">
    <el-time-picker v-model="value1" placeholder="Arbitrary time" />
    <el-time-picker
      v-model="value2"
      arrow-control
      placeholder="Arbitrary time"
    />
  </div>
</template>

<style scoped lang="scss">
.example-basic .el-date-editor {
  margin: 8px;
}
</style>
