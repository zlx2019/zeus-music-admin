import { createApp } from 'vue'
import App from './App.vue'

//导入Ui库
import {Quasar} from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

//定义Vue 根组件
const vueApp = createApp(App)

//注册Quasar库
vueApp.use(Quasar,{
    plugins:{},
})

//挂载
vueApp.mount('#app')
