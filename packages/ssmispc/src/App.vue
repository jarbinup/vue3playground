<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import MenuNav from './components/MenuNav.vue';

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
})

const toggleDark = useToggle(isDark)


</script>

<template>
  <div class="common-layout">
    <el-header id="header">
      <div class="flex-cloumn-center">
        <p> SSMISPC- <span id="jinrishici-sentence">正在加载今日诗词....</span></p>
      </div>
     <div class="flex-cloumn-center">
        <el-button @click="toggleDark()">
          <el-icon v-if="isDark"> <Moon /> </el-icon>
          <el-icon v-else> <Sunny /> </el-icon>
          <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
        </el-button>
      </div>
      
    </el-header>
    <el-container>
      <el-aside style="width: 180px;">
        <MenuNav />
      </el-aside>
      <el-container>
        <el-main id="main">
          <router-view></router-view>
        </el-main>
        <el-footer>SSMISPC</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#main {
  min-height: calc(100vh - 120px);
}
#header {
  background-color: rgb(44, 62, 80);
  color: aliceblue;
  display: flex;
  justify-content: space-between;
}
.flex-cloumn-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>