<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts"></script>

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
