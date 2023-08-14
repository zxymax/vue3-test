<script setup lang="ts">
import { onMounted } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import HelloWorld from '@/components/HelloWorld.vue'

import request from '@/utils/request'
import { reqLogin } from './api/user'

onMounted(() => {

  // test 1
  request({
    url: '/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111',
    },
  }).then((res) => {
    console.log(res)
  })

  // test 2
  reqLogin({
    username: 'admin',
    password: '111111'
  })

})
</script>

<template>
  <div>
    <h1>hello</h1>
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

<style scoped lang="scss">
div {
  h1 {
    color: $color;
  }
}
</style>
