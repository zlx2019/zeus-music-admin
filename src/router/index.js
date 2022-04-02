import {createRouter, createWebHistory,createWebHashHistory} from 'vue-router'

//导入页面组件
import Layout from "../page/Layout.vue";


// 配置组件路由规则
const routes = [
    {
        path: '/',
        //默认转发到 /admin/index
        redirect: {
            path: '/admin/index'
        }
    },
    /** 后台主页面*/
    {
        path: "/admin",
        component: Layout,
        /** 子组件路由*/
        children: [
            {path: 'index', component: () => import('../page/index/Index.vue')}
        ]
    },
    /** 登录页面路由*/
    {
        path: '/login',
        component: () => import('../page/Login.vue')
    },
    /** 404 路由配置*/
    {
        path: '/:catchAll(.*)',
        component: () => import('../page/error/404.vue')
    },
    {
        path: '/403',
        component: () => import('../page/error/403.vue')
    }
]

//创建Router
const router = createRouter({
    //路由模式 History
    history: createWebHashHistory(),
    routes
})

//导出Router
export default router


