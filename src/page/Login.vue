<template>
  <div class="login-page">

    <q-card class="login-form-card">
<!--      <img src="https://cdn.quasar.dev/img/mountains.jpg">-->

      <q-card-section class="login-title">
        <div class="text-h6">记忆音乐馆</div>
      </q-card-section>

      <q-form class="q-gutter-md form">
        <q-input
            filled
            label="用户名"
            lazy-rules
            :rules="[ val => val && val.length > 0 || '请输入用户名']"/>

        <q-input
            filled
            type="password"
            label="密码"
            lazy-rules
            :rules="[val => (val && val.length >0 ) || '请输入密码']"/>

        <q-toggle v-model="accept" label="记住我" />

        <div>
          <q-btn class="full-width" label="登录" type="submit" color="primary"/>
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script>


import {ref} from "vue";

export default {
  name: "Login",
  setup(){

    //是否记住登录
    const accept = ref(false)

    return{
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
