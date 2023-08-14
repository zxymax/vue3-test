<template>
  <div>
    <h1>一级路由展示登录后的数据</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import useUserStore from '@/store/modules/user'

let userStore = useUserStore()

onMounted(() => {
  userStore.userInfo()
})
</script>

<style scoped></style>
