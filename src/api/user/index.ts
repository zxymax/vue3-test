// 统一管理用户相关的接口
import request from '@/utils/request'
import { ILoginFormData, ILoginResponseData, IUserInfoResponseData } from './types'

enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

export const reqLogin = (data: any) =>
  request.post<any, ILoginResponseData>(API.LOGIN_URL, data)
export const reqUserInfo = () => request.get<any, IUserInfoResponseData>(API.USERINFO_URL)
export const reqLogOut = () => request.post<any, any>(API.LOGOUT_URL)
