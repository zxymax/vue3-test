import axios from 'axios'
import { ElMessage } from 'element-plus'

let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API
})

request.interceptors.request.use((config) => {
    // config 配置对象 headers属性请求头 经常给服务器携带公共参数


    // 返回配置对象
    return config
})

// 响应拦截器
request.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    let message = ''
    let status = error.response.status

    switch(status) {
        case 401:
            message = 'TOKEN过期'
            break
        case 403:
            message = '无权访问'
            break
        case 404:
            message = '请求地址错误'
            break
        case 500:
            message = '服务器出现问题'
            break
        default:
            message = '网络出现错误'
            break
    }
    ElMessage({
        type: 'error',
        message
    })
    return Promise.reject(error)
})

export default request