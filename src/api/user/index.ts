// 统一管理项目用户相关的接口
import request from "@/utils/request"
import { ILoginForm, ILoginResponseData, IUserResponseData } from "./types"

enum API {
    LOGIN_URL = '/user/login',
    USERINFO_URL = '/user/info'
}

export const reqLogin = (data: ILoginForm) => request.post<any, ILoginResponseData>(API.LOGIN_URL, data)

export const reqUserInfo = () => request.get<any, IUserResponseData>(API.USERINFO_URL)