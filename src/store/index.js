/**
 * Vuex管理,采用模块化结构
 */
import {createStore,createLogger} from "vuex";
import user from './modules/user.js'

//是否是生产环境
const debug = process.env.NODE_ENV !== 'production';

export default createStore({
    //全局状态管理
    state: {},
    getters:{},
    mutations: {},
    actions: {
    },
    //模块化状态管理
    // 导入User模块
    modules:{
        user
    },
    //设置为debug级别,打印 vuex日志
    plugins: debug ? [createLogger()] : []
})
