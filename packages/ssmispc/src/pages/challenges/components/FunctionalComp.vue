<script lang="ts" setup>
import { ref, h } from 'vue'
const ListComponent = (props, { emit }) => {
  const items = props.list.map((item, index) => h('li', {
    key: index,
    dataIndex: index,
    style: index === props['active-index'] ? { color: 'red' } : {},
    onClick: () => emit('item-clicked', item)
  }, item.name))

  return h('ul', {
    onClick(event) {
      const index = Number(event.target.getAttribute('dataIndex'))
      emit('toggle', index)
    },
  },
  items
  )
}
const list = [{
  name: "John",
}, {
  name: "Doe",
}, {
  name: "Smith",
}]

const activeIndex = ref(0)

function toggle(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <list-component
    :list="list"
    :active-index="activeIndex"
    @toggle="toggle"
  />
</template>