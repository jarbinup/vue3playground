<template>
<div class="common-layout">
  <el-menu
    :default-active="curActive"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    style="width: 180px; height: calc(100vh - 60px);"
  >
    <el-menu-item v-for="item in menuData" :index="item.index">
      <router-link slot="title" :to="{ name: item.index }" class="menu-item__name">{{ item.key }}</router-link>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { routes } from 'src/router/index'
interface MenuItem {
  key: string;
  index: string;
}
interface routeType {
  path: string;
  name: string;
  meta?: {
    title: string;
  };
  component?: string;
}
const menuData = computed(()=> {
  const result:MenuItem[] = [];
  routes.forEach((route:routeType) => {
    if (route.meta?.title) {
      result.push({
        key: route.meta.title,
        index: route.name,
      });
    }
  })
  return result;
});
const curActive = computed(()=> {
  const route = useRoute();
  return route.name;
});
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.menu-item__name {
  font-size: 14px;
  font-weight: bold;
  text-decoration-line: none;
  width: 100%;
  color: #2c3e50;
}
.el-menu-item.is-active {
  color: black;
  background-color: #efefef;
}
</style>