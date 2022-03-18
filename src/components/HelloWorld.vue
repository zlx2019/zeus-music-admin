<script setup>
import {ref} from 'vue'
import {defaultHello} from '../api/hello'

defineProps({
  msg: String
})

const count = ref(0)
const message = ref("Zeus Music")
let content = ref(null)

const sayHello = ()=>{
  defaultHello().then(result=>{
    content.value = result.data
  })
}
</script>

<template>
  <h1>{{ message }}</h1>

  <div>
    <q-btn color="primary" @click="count++">增加 is: {{ count }}</q-btn>
    <q-btn color="primary" @click="count--">减少 is: {{ count }}</q-btn>
    <br>
    <q-btn color="primary" @click="sayHello()">请求接口</q-btn>
    请求内容: {{content}}

  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
