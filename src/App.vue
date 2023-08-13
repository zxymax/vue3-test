<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import HelloWorld from '@/components/HelloWorld.vue'

</script>

<template>
  <div>
    <el-button :icon="Plus" size="default" type="primary">Default</el-button>
    <HelloWorld />

    <!--svg:图标外层容器节点，内部需要与use标签结合使用-->
    <svg>
      <!--xlink:href执行用哪一个图标，属性值务必#icon-图标名字-->
      <!--use标签fill属性可以设置图标颜色-->
      <use xlink:href="#icon-phone" fill="green"></use>
    </svg>

    <hr />

    <svg-icon name="phone" fill="blue" width="100px" height="100px"></svg-icon>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
