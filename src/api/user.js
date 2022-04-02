/**
 * User模块 API
 *
 */
import * as http from './request.js'
import * as constant from '../constant/index.js'

/**
 * 登录接口请求
 * @param username  用户名
 * @param password  密码
 * @returns {Promise<AxiosResponse<any>>}
 */
const login = (username,password)=> {
    return http.post(constant.API_LOGIN,{username,password})
}


export {
    login
}
