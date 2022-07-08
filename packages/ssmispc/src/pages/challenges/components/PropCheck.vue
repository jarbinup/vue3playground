<script lang="ts" setup>
defineProps({
  mode: {
    type: String,
    default: "default",
    validator: (value: string) => {
      return ['primary', 'ghost', 'dashed', 'link', 'text','default'].indexOf(value) !== -1
    }
  }
})
</script>

<template>
  <div :type="mode">{{mode}}</div>
</template>