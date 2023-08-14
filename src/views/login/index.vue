<template>
  <div class="login_container">
    <h1>一级路由登录</h1>
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :rules="rules"
          ref="loginForms"
          :model="loginForm"
        >
          <h1>Hello</h1>
          <h2>Welcome</h2>
          <el-form-item props="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item props="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import useUserStore from '@/store/modules/user'
import { useRouter, useRoute } from 'vue-router'

let $router = useRouter()
let useStore = useUserStore()

let loginForm = reactive({ username: '', password: '' })

let loginForms = ref()

let loading = ref(false)

let $route = useRoute()

const login = async () => {
  loading.value = true
  await loginForms.value.validate()
  try {
    await useStore.userLogin(loginForm)

    let redirect: any = $route.query.redirect
    $router.push({ path: redirect || '/' })
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登录成功',
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
const validatorUserName = (rule: any, value: any, callback: any) => {
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少5位'))
  }
}

const validatorUserPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少5位'))
  }
}
const rules = {
  username: [
    // { required: true, min: 6, max: 10, message: "账号长度至少6位", trigger: "change" }
    { trigger: 'change', validator: validatorUserName },
  ],
  password: [
    // { required: true, min: 6, max: 15, message: "密码长度至少6位", trigger: "change" }
    { trigger: 'change', validator: validatorUserPassword },
  ],
}
</script>

<style scoped>
.login_container {
  width: 100%;
  height: 100vh;
}
.login_form {
  width: 80%;
}
</style>
