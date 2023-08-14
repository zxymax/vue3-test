// 路由鉴权
import router from '@/router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

//全局前置守卫
router.beforeEach((to: any, from: any, next: any) => {
    nprogress.start()
    next()
})
//全局后置守卫
router.afterEach((to: any, from: any) => {
    nprogress.done()
})