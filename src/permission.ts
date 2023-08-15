// 路由鉴权
import router from '@/router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import pinia from './store'
import useUserStore from './store/modules/user'
import setting from './setting'

nprogress.configure({ showSpinner: false })

let userStore = useUserStore(pinia)
console.log(userStore)

//全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
    document.title =  setting.title + ' ' + to.meta.title
    nprogress.start()

    // 用户登陆判断
    let token = userStore.token
    let username = userStore.username
    if (token) {
       if (to.path == '/login') {
            next({ path: '/' })
       }  else {
            // 登陆成功
            if (username) {
                next()
            } else {
                try {
                    await userStore.userInfo()
                    next()
                } catch (error) {
                    // token过期 不能获取用户信息
                    // 退出登陆清空用户信息
                    await userStore.userLogOut()
                    next({ path: '/login', query: { redirect: to.path } })
                }
            }
       }
    } else {
        if (to.path == '/login') {
            next()
        } else {
            next({path: '/login', query: { redirect: to.path }})
        }
    }
})
//全局后置守卫
router.afterEach((to: any, from: any) => {
    nprogress.done()
})