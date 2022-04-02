import { createApp } from 'vue'
import App from './App.vue'
import Router from "./router/index.js";
import store from './store'

import {NaiveRegister} from './config/naive.js'
import {QuasarRegister} from './config/quasar.js'
import './security/permission.js'
//定义Vue 根组件
const vueApp = createApp(App)

//注册Quasar库
QuasarRegister(vueApp)
//注册Naive组件
NaiveRegister(vueApp)
//注册Router
vueApp.use(Router)
//注册Vuex
vueApp.use(store)

//挂载
vueApp.mount('#app')
