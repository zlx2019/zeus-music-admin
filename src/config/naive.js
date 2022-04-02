/**
 * Naive 组件注册配置(按需引入)
 */

//导出所需组件
import {create,
    NButton,
    NMessageProvider,
    NIcon,
    NDropdown,
    NGradientText} from 'naive-ui'

//注册所需组件
const Naive = create({
    //注册所需组件
    components:[
        NButton,NGradientText,NMessageProvider,NIcon,NDropdown
    ]
})

//Naive 注册到 Vue
export function NaiveRegister(app){
    app.use(Naive);
}
