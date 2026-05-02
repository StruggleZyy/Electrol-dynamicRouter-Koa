//1.引入依赖
const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors') 

//2.创建实例
const app = new Koa()
const router = new Router()

//3.允许跨域
app.use(cors())

//4.写菜单接口
//4.写菜单接口
router.get('/api/menu/list', (ctx) => {
    // 这里就是返回给前端的菜单数据！
    ctx.body = {
        code: 200,
        msg: 'success',
        data: [
            {
                key: '首页',
                icon: '🏠',
                children: [
                    { name: '首页', path: '/', meta: { title: '首页' } }
                ]
            },
            {
                key: '航天器',
                icon: '🚀',
                children: [
                    { name: '运载火箭', path: '/space/rocket', meta: { title: '运载火箭' } },
                    { name: '载人飞船', path: '/space/spaceship', meta: { title: '载人飞船' } },
                    { name: '空间站', path: '/space/station', meta: { title: '空间站' } },
                    { name: '卫星', path: '/space/satellite', meta: { title: '卫星' } },
                    { name: '探测器', path: '/space/probe', meta: { title: '深空探测器' } }
                ]
            },
            {
                key: '发射任务',
                icon: '🛸',
                children: [
                    { name: '任务规划', path: '/mission/plan', meta: { title: '任务规划' } },
                    { name: '发射记录', path: '/mission/record', meta: { title: '发射记录' } },
                    { name: '在轨任务', path: '/mission/orbit', meta: { title: '在轨任务' } },
                    { name: '返回任务', path: '/mission/return', meta: { title: '返回任务' } }
                ]
            },
            {
                key: '测控通信',
                icon: '📡',
                children: [
                    { name: '地面测控', path: '/tracking/ground', meta: { title: '地面测控' } },
                    { name: '航天测控网', path: '/tracking/network', meta: { title: '航天测控网' } },
                    { name: '数据传输', path: '/tracking/data', meta: { title: '数据传输' } },
                    { name: '深空通信', path: '/tracking/deepspace', meta: { title: '深空通信' } }
                ]
            },
            {
                key: '航天员',
                icon: '👨‍🚀',
                children: [
                    { name: '航天员列表', path: '/astronaut/list', meta: { title: '航天员列表' } },
                    { name: '训练计划', path: '/astronaut/training', meta: { title: '训练计划' } },
                    { name: '出舱活动', path: '/astronaut/eva', meta: { title: '出舱活动' } },
                    { name: '生活保障', path: '/astronaut/life', meta: { title: '生活保障' } }
                ]
            },
            {
                key: '科学实验',
                icon: '🔬',
                children: [
                    { name: '微重力实验', path: '/experiment/gravity', meta: { title: '微重力实验' } },
                    { name: '生命科学', path: '/experiment/life', meta: { title: '生命科学' } },
                    { name: '材料科学', path: '/experiment/material', meta: { title: '材料科学' } },
                    { name: '天文观测', path: '/experiment/astronomy', meta: { title: '天文观测' } }
                ]
            },
            {
                key: '系统管理',
                icon: '⚙️',
                children: [
                    { name: '用户管理', path: '/system/user', meta: { title: '用户管理' } },
                    { name: '角色管理', path: '/system/role', meta: { title: '角色管理' } },
                    { name: '菜单管理', path: '/system/menu', meta: { title: '菜单管理' } },
                    { name: '权限管理', path: '/system/permission', meta: { title: '权限管理' } },
                    { name: '岗位管理', path: '/system/position', meta: { title: '岗位管理' } }
                ]
            }
        ]
    }
})
//5.挂载路由
app.use(router.routes())
app.use(router.allowedMethods())  // 添加这一行，处理 405 错误
//6.启动服务
app.listen(3000,()=>{
    console.log('服务启动成功')
})
