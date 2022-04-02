<template>
  <div class="login-page">

    <q-card class="login-form-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section class="login-title">
        <div class="text-h6">记忆音乐馆</div>
      </q-card-section>

      <q-form class="q-gutter-md form" ref="myForm" @submit="loginSubmit(username,password)">
        <q-input
            filled
            label="用户名"
            lazy-rules
            v-model="username"
            :rules="[ val => val && val.length > 0 || '请输入用户名']"/>

        <q-input
            filled
            type="password"
            label="密码"
            lazy-rules
            v-model="password"
            :rules="[val => (val && val.length >0 ) || '请输入密码']"/>

        <q-toggle v-model="accept" label="记住我" />

        <div>
          <q-btn class="full-width" label="登录" type="submit"  color="primary"/>
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script>
import {ref} from "vue";
import {useStore} from 'vuex'
import {useRouter,useRoute} from 'vue-router'

export default {
  name: "Login",
  setup(){
    //use
    const store = useStore()
    const router = useRouter()
    const route = useRoute()


    //用户名密码
    const myForm = ref(null)
    const username = ref('')
    const password = ref('')
    //是否记住登录
    const accept = ref(false)


    //登录方法
    const loginSubmit = (username,password)=>{
      store.dispatch('user/login',{username,password})
      .then(()=> {
        //登录成功
        //如果是从其他页面跳转来登录,成功后再次跳转回去,否则就跳转到首页
        router.push({path: route.query.redirect || '/'})
      });
    }

    return{
      username,password,
      loginSubmit,
      accept
    }
  }
}
</script>

<style scoped lang="less">
.login-page{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login-title{
    text-align: center;
  }

  .login-form-card{
    width: 400px;
    padding: 20px;
  }
}
</style>
