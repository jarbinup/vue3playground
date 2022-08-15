import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
// 1. 定义一些路由
// 每个路由都需要映射到一个组件
export const routes: Array<RouteRecordRaw>  = [
  {
    path: '/', 
    redirect: '/form',
    name: 'home',
  },
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "form" */ 'pages/form/index.vue'),
    meta: {
      title: '表单模块'
    }
  },
  {
    path: '/challenges',
    name: 'challenges',
    component: () => import(/* webpackChunkName: "challenges" */ 'pages/challenges/index.vue'),
    meta: {
      title: 'challenges'
    }
  },
  {
    path: '/datascreen',
    name: 'datascreen',
    component: () => import(/* webpackChunkName: "datascreen" */ 'pages/datascreen/index.vue'),
    meta: {
      title: 'datascreen'
    }
  },
  {
    path: '/dataset',
    name: 'dataset',
    component: () => import(/* webpackChunkName: "dataset" */ 'pages/dataset/index.vue'),
    meta: {
      title: 'dataset'
    }
  }
]

// 2. 创建路由实例并传递 `routes` 配置
const router = createRouter({
  // 3. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
})

export default router;