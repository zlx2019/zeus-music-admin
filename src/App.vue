<script setup>
//Vue3 setup 语法糖
import Layout from "./page/Layout.vue";
</script>

<template>
  <div id="app">
    <n-message-provider>
      <router-view/>
    </n-message-provider>
  </div>
</template>

<style>

</style>
