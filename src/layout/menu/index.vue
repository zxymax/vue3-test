<script setup lang="ts">
defineProps(['menuList'])
const goRoute = (vc: any) => {
  console.log(vc.index)
}
</script>
<script lang="ts">
export default {
  name: 'Menu',
}
</script>

<template>
  <div>
    <h1>{{ menuList }}}</h1>
    <template v-for="(item, index) in menuList" :key="item.path">
      <template v-if="!item.children">
        <el-menu-item :index="item.path" v-if="!item.meta.hidden" @click="goRoute">
          <template #title>
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <template v-if="item.children && item.children.length == 1">
        <el-menu-item
          :index="item.children[0].path"
          v-if="!item.children[0].meta.hidden"
        >
          <template #title>
            <el-icon>
              <component :is="item.children[0].meta.icon"></component>
            </el-icon>
            <span>{{ item.children[0].meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <el-sub-menu v-if="item.children && item.children.length > 1">
        <template #title>
          <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  </div>
</template>
<style scoped></style>
