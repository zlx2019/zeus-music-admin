/**
 * User 模块状态管理
 */
import {loadToken,storeToken,removeToken} from '../../utils/auth.js'
import * as userApi from '../../api/user.js'
import * as constant from '../../constant/index.js'
import {isNotEmpty} from "../../utils/util.js";

// User State区域
const state = ()=> ({
    //登录用户信息
    userInfo:{
        username: '',
        nickname: '周杰伦',
        token: loadToken(),
        roles:[]
    }
})


// User Getter | 计算属性
const getters = {
    //获取登录用户NickName
    loginNickName : (state,getters,rootState) => {
        return state.userInfo.nickname.slice(0,1)
    },
    //获取用户Token
    getToken: (state) => {
        return state.userInfo.token
    }
}


// User action | 异步操作
const actions = {
    /**
     * 登录请求
     * @param username  用户名
     * @param password  密码
     * @returns {Promise<unknown>}
     */
    login({commit,state,getters},{username,password}){
        return new Promise((resolve,reject) =>{
            userApi.login(username,password)
                .then(response=>{
                    //从headers中获取token
                    const token = response.headers[constant.Header_Token]
                    if (isNotEmpty(token)){
                        //Token 存入User Vuex
                        commit('setToken',token)
                    }
                    resolve(response)
                }).catch(err => {
                    reject(err)
            })
        })
    },

    /**
     * 退出登录
     * 清除登录用户信息及本地token
     */
    logout({commit}){
        commit('setToken','')
        commit('setRoles',[])
        removeToken()
    }
}

// User Mutations | 操作 State中的数据
const mutations = {
    //设置Token
    setToken : (state,token) =>{
        state.userInfo.token = token
        console.log("Token store Vuex!")
        //持久化到LocalStorage
        storeToken(token)
    },
    //设置NikeName
    setNickName: (state,nikeName) =>{
        state.userInfo.nickname = nikeName
    },
    //设置角色列表
    setRoles: (state,roles) => {
        state.userInfo.roles = roles
    }
}

// 导出User模块 Vuex
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
