<script lang="ts" setup>
import { ref } from "vue"
import Tobody from "./components/Tobody.vue"
import OnceRender from "./components/OnceRender.vue"
import PropCheck from "./components/PropCheck.vue"
import FunctionalComp from "./components/FunctionalComp.vue"
import MyButton from "./components/MyButton"

</script>

<template>
  <p>https://cn-vuejs-challenges.netlify.app/</p>
  <Tobody />
  <OnceRender />
  <PropCheck mode="primary" />
  <FunctionalComp />
  <MyButton> buutoooon </MyButton>
</template>

<style>
.el-footer {
  font-size: large;
  font-weight: 300;
  font-style: italic;
}
</style>