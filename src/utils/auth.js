/**
 * Token存储工具类
 */

/**
 * Token 在localStorage的Key
 * @type {string}
 */
const TOKEN_KEY = "Music-Token"

/**
 * 设置Token到localStorage
 * @param token 值
 */
export const storeToken = token =>{
    localStorage.setItem(TOKEN_KEY,token)
    console.log("Token store LocalStorage")
}

/**
 * 从localStorage中获取Token
 * @returns {string}
 */
export const loadToken = () =>{
    return localStorage.getItem(TOKEN_KEY)
}

/**
 * 删除Token
 */
export const removeToken = () =>{
    localStorage.removeItem(TOKEN_KEY)
}
