<script setup lang="ts">
import useLayoutSettingStore from '../../../store/modules/setting'
import { useRoute } from 'vue-router'
let layoutSettingStore = useLayoutSettingStore()

const changeIcon = () => {
  layoutSettingStore.fold = !layoutSettingStore.fold
}

let $route = useRoute()
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
      <el-breadcrumb-item
        v-for="(item, index) in $route.matched"
        :key="index"
        v-show="item.meta.icon"
        :to="item.path"
      >
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped></style>
