import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import axios from 'axios'
console.log(axios)
axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '111111',
  },
})

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

console.log(import.meta.env)

// svg插件配置
import 'virtual:svg-icons-register'

import globalComponent from '@/components'

app.use(globalComponent)
app.mount('#app')
