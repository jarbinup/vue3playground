<script setup lang="ts">
import { Teleport } from "vue"
const msg = "Hello World"

</script>

<template>
<Teleport to=".el-footer">
   <span> - {{ msg }}</span>
</Teleport>

</template>
