<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { watch, ref, nextTick } from 'vue'
import useLayoutSettingStore from '../../store/modules/setting'

let layoutSettingStore = useLayoutSettingStore()

watch(() => layoutSettingStore.refresh, () => {
    console.log(123)
    // 点击刷新按钮 路由组件销毁
    flag.value = false
    nextTick(() => {
        flag.value = true
    })
})

let flag = ref(true)

</script>

<script lang="ts">
export default {
  name: 'Main',
}
</script>
<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: rotate(0deg);
}
.fade-enter-active {
  transition: all 0.1s;
}
.fade-enter-to {
  opacity: 1;
  transform: rotate(360deg);
}
</style>
