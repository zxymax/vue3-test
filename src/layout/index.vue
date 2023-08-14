<script setup lang="ts">
import { useRoute } from 'vue-router'
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import TabBar from './tabbar/index.vue'
import useUserStore from '@/store/modules/user'

import useLayoutSettingStore from '../store/modules/setting'

let layoutSettingStore = useLayoutSettingStore()

let $route = useRoute()

// console.log($route.path)
let userStore = useUserStore()
</script>

<template>
  <div class="layout_container">
    <div class="layout_side" :class="{fold:layoutSettingStore.fold?true:false}">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu
          :collapse="layoutSettingStore.fold?true:false"
          :default-active="$route.path"
          background-color="#001529"
          text-color="white"
          active-text-color="yellowgreen"
        >
          <Menu :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar"  :class="{fold:layoutSettingStore.fold?true:false}">
      <TabBar></TabBar>
    </div>
    <div class="layout_main" :class="{fold:layoutSettingStore.fold?true:false}">
      <Main></Main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_side {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background-color;
    transition: all .3s;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
    }
    &.fold {
      width: $base-menu-min-width;
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0px;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background-color: cyan;
    transition: all .3s;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
  .layout_main {
    position: absolute;
    left: $base-menu-width;
    top: $base-tabbar-height;
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base-tabbar-height);
    background-color: green;
    padding: 20px;
    overflow: auto;
    transition: all .3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
    
  }
}
</style>
