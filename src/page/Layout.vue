<template>
  <q-layout view="hHh lpR fFf">

    <!--导航栏-->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <!--标题-->
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Music Title
        </q-toolbar-title>

        <!--头像-->
        <q-space />
        <q-avatar color="primary" text-color="white">{{getNickName}}</q-avatar>
        <n-dropdown :options="options">
          <n-button>用户资料</n-button>
        </n-dropdown>

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
import {ref,computed,h} from 'vue'
import {useStore} from 'vuex'
import { NIcon } from "naive-ui";
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from "@vicons/ionicons5";

/**
 * 创建Icon组件
 */
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};

export default {
  name: "Layout",
  setup(){
    //use
    const store = useStore()

    //获取登录用户NickName
    const getNickName = computed(()=> store.getters["user/loginNickName"])

    //用户信息选项栏
    const options = ref([
      {
        label: "用户资料",
        key: "profile",
        icon: renderIcon(UserIcon)
      },
      {
        label: "编辑用户资料",
        key: "editProfile",
        icon: renderIcon(EditIcon)
      },
      {
        label: "退出登录",
        key: "logout",
        icon: renderIcon(LogoutIcon),
        props:{
          onClick: ()=>{
            //退出登录
            store.dispatch('user/logout').then(()=> window.location.reload())
          }
        }
      }
    ])

    //左边栏是否展开
    const leftDrawerOpen = ref(false)
    // 打开 or 关闭左边栏
    const toggleLeftDrawer = ()=>{
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return{
      leftDrawerOpen,
      toggleLeftDrawer,
      getNickName,
      options
    }
  }
}
</script>

<style scoped>

</style>
