<script setup lang="ts">
import useLayoutSettingStore from '../../../store/modules/setting'

let layoutSettingStore = useLayoutSettingStore()

const changeIcon = () => {
  layoutSettingStore.fold = !layoutSettingStore.fold
}
</script>

<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<template>
  <div>
    <el-icon style="margin-right: 10px" @click="changeIcon">
      <component :is="layoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped></style>
