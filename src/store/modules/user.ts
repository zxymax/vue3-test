import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import type { ILoginForm } from '@/api/user/types'

let useUserStore = defineStore('User', {
    state: () => {
        return {
            token: localStorage.getItem('TOKEN')
        }
    },

    actions: {
        async userLogin(data: ILoginForm) {
            let result: any = await reqLogin(data)
            console.log(result)

            if (result.code === 200) {
                // pinia 存储token
                this.token = result.data.token
                localStorage.setItem('TOKEN', result.data.token)

                return 'ok'
            } else {
                return Promise.reject(new Error(result.data.message))
            }
        }
    },

    getters: {

    }
})

export default useUserStore
