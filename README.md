# dynamicRouter

一个基于 Vue 3 + Vite 的前端项目，实现了动态路由功能。该项目通过从后端 API 获取菜单数据，并根据这些数据动态地添加路由配置，从而实现灵活的页面导航。

## 技术栈

*   **前端**: Vue 3, Vite, Vue Router 4
*   **构建工具**: Vite
*   **HTTP 请求**: Axios
*   **后端服务**: Node.js (Express) - 位于 `server/` 目录下


##  安装依赖
你需要分别安装前端和后端的依赖。


安装前端依赖：
cd dynamicRouter

npm install


安装后端依赖：

cd dynamicRouter/server

npm install


启动项目
启动后端服务器：

cd dynamicRouter/server

node index.js
默认情况下，后端服务器会在 http://localhost:3000 上运行。


启动前端开发服务器：
cd dynamicRouter

npm run dev


注：
1.目前保证项目能正常运行，还没有使用导航守卫，后续会添加导航守卫。

2.代码中，使用了 () => import(importPath) 这种方式来动态导入组件。这种方式的问题在于：

构建时无法解析：Vite 或 Webpack 在构建项目时，无法静态分析出 importPath 的具体值（因为它是一个变量）。这会导致：

构建工具不知道哪些 .vue 文件被引用了。即使某个视图文件（如 @/views/UnusedPage.vue）实际上没有被后端菜单返回，构建工具也不敢删除它，因为理论上它可能被引用。
最终导致打包体积增大，并且可能出现“找不到模块”的运行时错误。
路径拼接风险：../views${child.path}.vue 这种拼接方式容易出错，比如路径中包含特殊字符或层级不匹配。
