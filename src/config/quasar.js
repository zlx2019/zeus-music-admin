/**
 * Quasar组件注册配置(全局引入)
 */
import {Quasar} from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

//Quasar 注册到Vue
export function QuasarRegister(app){
    app.use(Quasar);
}
