<script setup lang="ts"></script>

<template>
  <div>
    <el-button type="primary" size="small" icon="Refresh" circle></el-button>
        <el-button type="primary" size="small" icon="FullScreen" circle></el-button>
        <el-button type="primary" size="small" icon="Setting" circle></el-button>
        <img src="https://images.evetech.net/alliances/99005338/logo?size=64" style="width: 24px;height: 24px;margin: 0 10px;" />
        <el-dropdown>
            <span class="el-dropdown-link">
                admin
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
            </span>
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
            </template>
    </el-dropdown>
  </div>
</template>

<style scoped></style>
