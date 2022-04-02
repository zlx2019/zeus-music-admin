/**
 * Router 导航守卫
 */
import router from "../router/index.js";
import store from  "../store"
import {loadToken} from "../utils/auth.js";

//无需授权的路由请求 | 白名单
const whiteList = ['/login','/404','/403']

/**
 * router 前置导航守卫
 * to:   要跳转的目标路由
 * from: 从哪个路由跳转来的
 * next: 放行
 */
router.beforeEach(async (to,from,next) =>{
    const token = loadToken()
    if (token){
        if (to.path === '/login'){
            next({path: '/'})
        }else {
            //token存在,直接放行
            next()
        }
    }else {
        //白名单 直接放行
        if (whiteList.indexOf(to.path) !== -1){
            next()
        }else {
            //如果不持有token,访问的路由且不属于白名单,就跳转到login页面
            //并且保留要跳转的路由,以便登录后直接跳转过去
            next(`/login?redirect=${to.path}`)
        }
    }
})

/**
 * router 后置导航守卫
 */
// router.afterEach((to,from,next) =>{
//
// })
