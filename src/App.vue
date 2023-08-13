<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
</script>

<template>
  <div>
    <el-button :icon="Plus" size="default" type="primary">Default</el-button>
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
