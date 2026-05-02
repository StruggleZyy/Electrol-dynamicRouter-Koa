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


注：目前保证项目能正常运行，还没有使用导航守卫，后续会添加导航守卫。
