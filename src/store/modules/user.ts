import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo, reqLogOut } from '@/api/user'
// import type { ILoginForm, ILoginResponseData } from '@/api/user/types'
import { IUserState } from './types/type'
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from '@/utils/token'
import { constantRoute } from '@/router/routes'

let useUserStore = defineStore('User', {
  state: (): IUserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute,
      username: '',
      avatar: '',
    }
  },

  actions: {
    async userLogin(data: any) {
      let result: any = await reqLogin(data)
      console.log(result)

      if (result.code === 200) {
        // pinia 存储token
        // this.token = result.data.token as string
        this.token = result.data as string
        // SET_TOKEN(result.data.token as string)
        SET_TOKEN(result.data as string)

        return 'ok'
      } else {
        // return Promise.reject(new Error(result.data.message))
        console.log(result)
        return Promise.reject(new Error(result.data))
      }
    },
    async userInfo() {
      const result = await reqUserInfo()

      if (result.code == 200) {
        this.username = result.data.name
        this.avatar = result.data.avatar
        // this.username = result.data.checkUser.username
        // this.avatar = result.data.checkUser.avatar
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    async userLogOut() {
      let result = await reqLogOut()
      if (result.code == 200) {
        this.token = ''
        this.username = ''
        this.avatar = ''
        REMOVE_TOKEN()
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  },

  getters: {},
})

export default useUserStore
