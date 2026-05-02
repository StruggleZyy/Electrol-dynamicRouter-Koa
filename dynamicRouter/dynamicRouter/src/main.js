import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index.js'
import { initDynamicRoutes } from './router'
import axios from 'axios'
// createApp(App).use(ElementPlus).use(router).mount('#app')
// 先加载动态路由，再挂载应用
initDynamicRoutes().then(() => {
  createApp(App)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
})
