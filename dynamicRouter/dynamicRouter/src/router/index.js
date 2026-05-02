// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue' // 你的布局文件
import axios from 'axios'


// 基础路由
const baseRoutes = [
  {
    path: '/',
    component: Layout, // 👈 首页先加载布局
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: baseRoutes
})

// 动态路由
// 动态路由加载函数
export async function initDynamicRoutes() {
  try {
    const res = await axios.get('http://localhost:3000/api/menu/list')
    const menuList = res.data.data

    menuList.forEach(group => {
      group.children.forEach(child => {
        // 跳过首页，避免重复注册
        if (child.path === '/') return

        // 👇 关键修改：手动拼接路径，用 require.context 或固定写法解决多级路径问题
        const importPath = `../views${child.path}.vue`
        
        router.addRoute({
          path: child.path,
          component: Layout,
          children: [
            {
              path: '',
              component: () => import(importPath)
            }
          ]
        })
        console.log('✅ 已注册路由：', child.path, '→', importPath)
      })
    })

    console.log('✅ 所有动态路由加载完成')
  } catch (err) {
    console.error('❌ 路由加载失败', err)
  }
}
export default router