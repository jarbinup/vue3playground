<script lang="ts" setup>
import { ref } from "vue"

const count = ref(0)

setInterval(() => {
  count.value++
}, 1000)
</script>

<template>
  <div >
    <span>v-once 指令只渲染一次组件和元素</span>
    <span v-once>, 使它从不更新: {{ count }}</span>
  </div>
</template>