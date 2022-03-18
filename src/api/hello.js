import {get} from './request'

const defaultHello = ()=>{
    return  get("/default/hello")
}


export {defaultHello}
