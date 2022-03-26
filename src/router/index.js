import {createRouter,createWebHistory} from 'vue-router'


// 配置组件路由规则
const routes = [
    {path: '/',component: ()=> import('../page/index/Index.vue')}
]

//创建Router
export const router = createRouter({
    //路由模式 History
    history: createWebHistory(),
    routes
})

//导出Router
export default router
