<template>
<div class="w-full">
  <div class="mb-6">
    <div class="flex justify-between justify-items-center mb-6">
      <p class="border-l-4 border-purple-600 pl-3 leading-8">看板概览</p>
      <el-button @click="handleClick">播放</el-button>
    </div>
    <div class="h-96 border-2 border-purple-100">
      
    </div>
  </div>
  <div class="mb-6">
    <div class="flex justify-between justify-items-center mb-6">
      <p class="border-l-4 border-purple-600 pl-3 leading-8">看板配置</p>
    </div>
    <div class="h-96 border-2 border-purple-100">
      
    </div>
  </div>
</div>

</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const handleClick = () => {
//  this.$message.success('播放成功');
  console.log('播放成功');
}

</script>
<style >

</style>
