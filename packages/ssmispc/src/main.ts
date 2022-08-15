import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/style/tailwindcss.css'
// 图标是单独的库， 需要单独安装，单独引入
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from 'src/App.vue'
import router from 'src/router'
// 开启暗黑主题模式
import 'element-plus/theme-chalk/dark/css-vars.css'


const app = createApp(App)
// 全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(ElementPlus)

app.mount('#app')
