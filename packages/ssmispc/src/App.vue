<script setup lang="ts">
import MenuNav from './components/MenuNav.vue';
</script>

<template>
  <div class="common-layout">
    <el-header id="header">
      <div>
        SSMISPC - 
        <span id="jinrishici-sentence">正在加载今日诗词....</span>
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
  justify-content: center;
  flex-direction: column;
  text-align: left;
}
</style>