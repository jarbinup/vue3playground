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
      <p class="menu-item-text" @click="() => {goToPage(item.index)}">{{ item.key }}</p>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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
const useRouterCustom = () => {
  const router = useRouter();
  const goToPage = (key: string) => {
    router.push({ name: key });
  }
  return {
    goToPage
  }
}
const { goToPage } = useRouterCustom()
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

<style scoped lang="scss">
.menu-item-text {
  width: 100%;
  text-align: center;
}
.el-menu-item.is-active {
    background-color: var(--el-menu-hover-bg-color);
}
</style>