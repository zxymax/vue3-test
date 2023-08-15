// 用户登录接口
export interface ILoginFormData {
    username: string
    password: string
}

export interface IResponseData {
    code: number
    message: string
    ok: boolean
} 

// 定义登录接口返回数据类型
export interface ILoginResponseData extends IResponseData {
    data: string
}

export interface IUserInfoResponseData extends IResponseData {
    data: {
        routes: string[]
        buttons: string[]
        roles: string[]
        name: string
        avatar: string
    }
}