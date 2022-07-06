import { createRouter, createWebHashHistory } from 'vue-router'

// 1. 定义一些路由
// 每个路由都需要映射到一个组件
const routes = [
  { path: '/', redirect: '/form', },
  { 
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "form" */ 'pages/form/index.vue'),
    meta: {
      title: '表单功能'
    }
  },
]

// 2. 创建路由实例并传递 `routes` 配置
const router = createRouter({
  // 3. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
})

export default router;