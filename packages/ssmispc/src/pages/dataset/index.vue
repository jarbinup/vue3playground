<template>
<div class="w-full">
  <div class="flex justify-between mb-6">
    <el-input class="w-72" placeholder="输入 看板名称 / 创建人 进行搜索"></el-input>
    <el-button type="" @click="handleClick">创建</el-button>
  </div>
  <div class="flex justify-start">
    <div class="w-72 p-4 max-w-sm rounded-lg shadow-md flex space-x-4 border-solid border-2 border-light-blue-500 hover:outline-none hover:ring-2 hover:ring-purple-600 cursor-pointer">
      <div class="">
        <p class="mb-4 text-left">大盘概览</p>
        <p class="text-sm text-left">这是对于过去一年大盘整体数据的一个概览</p>
      </div>
      <div>
        <el-icon> <Setting /> </el-icon>
      </div>
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
