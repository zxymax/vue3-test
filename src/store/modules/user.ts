import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo } from '@/api/user'
import type { ILoginForm, ILoginResponseData } from '@/api/user/types'
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
    async userLogin(data: ILoginForm) {
      let result: ILoginResponseData = await reqLogin(data)
      console.log(result)

      if (result.code === 200) {
        // pinia 存储token
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)

        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
    async userInfo() {
      const result = await reqUserInfo()

      if (result.code == 200) {
        this.username = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
        return 'ok'
      } else {
        return Promise.reject('获取用户信息失败')
      }
    },
    async userLogOut() {
      this.token = ''
      this.username = ''
      this.avatar = ''
      REMOVE_TOKEN()
    },
  },

  getters: {},
})

export default useUserStore
