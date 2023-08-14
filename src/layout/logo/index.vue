<script setup lang="ts">
import setting from '@/setting'
</script>
<template>
  <div class="logo">
    <img :src="setting.logo" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  padding: 20px;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    font-size: 14px;
    margin-left: 10px;
  }
}
</style>
