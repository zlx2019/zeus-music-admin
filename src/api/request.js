/** 封装的网络请求工具*/
import axios from "axios"
import store from '../store'

const baseUrl = import.meta.env.VITE_API_HOST
// const baseUrl = 'http://127.0.0.1:8080'

/** 设置axios全局配置*/
axios.defaults.timeout = 10000 //超时时间
axios.defaults.headers['Content-Type'] = 'application/json' //设置默认提 交 json
axios.defaults.transformRequest = data => JSON.stringify(data) //把数据对象 序列化成 json 字符串

/** 初始化自定义的axios实例*/
const client = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers:{
        "Content-Type":'application/json'
    },
    transformRequest: data => JSON.stringify(data),
})

/** axios 请求拦截器*/
client.interceptors.request.use(config =>{
    // 请求前 携带上token
    const token = store.getters["user/getToken"]
    if (token){
        config.headers['Authorization'] = token
    }
    return config
})


/** Get请求函数*/
function get(url,params){
    return  client.get(url,{params})
}

/** Post请求函数*/
function post(url,data){
    return client.post(url,data)
}

/** Put请求函数*/
function put(url,data){
    return client.put(url,data)
}

/** Delete请求函数*/
function deletes(url,data){
    return client.delete(url,{data})
}


/** 导出封装的请求函数*/
export {get,post,put,deletes}
