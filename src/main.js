import { createApp } from 'vue'
import App from './App.vue'
import Router from "./router/index.js";


//导入Quasar Ui库
import {Quasar} from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

//按需导入Naive Ui库
import {create,NButton,NGradientText} from 'naive-ui'
const Naive = create({
    //注册所需组件
    components:[
        NButton,NGradientText
    ]
})


//定义Vue 根组件
const vueApp = createApp(App)

//注册Quasar库
vueApp.use(Quasar,{plugins:{},})
//注册Naive组件
vueApp.use(Naive)

//注册Router
vueApp.use(Router)

//挂载
vueApp.mount('#app')
