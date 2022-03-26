<template>
  <q-layout view="hHh lpR fFf">

    <!--导航栏-->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Music Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!--左边栏内容-->
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>

    </q-drawer>

    <!--页面内容-->
    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>

</template>

<script>
import {ref} from 'vue'
export default {
  name: "Layout",
  setup(){
    //左边栏是否展开
    const leftDrawerOpen = ref(false)

    // 打开 or 关闭左边栏
    const toggleLeftDrawer = ()=>{
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return{
      leftDrawerOpen,
      toggleLeftDrawer
    }
  }
}
</script>

<style scoped>

</style>
