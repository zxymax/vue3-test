<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import useLayoutSettingStore from '../../../store/modules/setting'

import useUserStore from '../../../store/modules/user'

let userStore = useUserStore()

let layoutSettingStore = useLayoutSettingStore()

const updateRefresh = () => {
  layoutSettingStore.refresh = !layoutSettingStore.refresh
}

const fullScreen = () => {
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

let $router = useRouter()
let $route = useRoute()

const logOut = () => {
    userStore.userLogOut()
    $router.push({path: '/login', query: { redirect: $route.path}})
}
</script>
<script lang="ts">
export default {
  name: 'Setting',
}
</script>
<template>
  <div>
    <el-button
      type="primary"
      size="small"
      icon="Refresh"
      circle
      @click="updateRefresh"
    ></el-button>
    <el-button
      type="primary"
      size="small"
      icon="FullScreen"
      circle
      @click="fullScreen"
    ></el-button>
    <el-button type="primary" size="small" icon="Setting" circle></el-button>
    <img
      :src="userStore.avatar"
      style="width: 24px; height: 24px; margin: 0 10px"
    />
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ userStore.username }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logOut" >退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped></style>
