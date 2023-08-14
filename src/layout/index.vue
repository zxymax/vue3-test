<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'

import useUserStore from '@/store/modules/user'

let userStore = useUserStore()
</script>
<template>
  <div class="layout_container">
    <div class="layout_side">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="white">
          <Menu :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar">2</div>
    <div class="layout_main">3</div>
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
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0px;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background-color: cyan;
  }
  .layout_main {
    position: absolute;
    left: $base-menu-width;
    top: $base-tabbar-height;
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base-tabbar-height);
    background-color: green;
    padding: 20px;
  }
}
</style>
