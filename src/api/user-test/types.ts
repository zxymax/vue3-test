export interface ILoginForm {
  username: string
  password: string
}

interface IDataType {
  token?: string
  message?: string
}

// 登录接口返回的数据类型
export interface ILoginResponseData {
  code: number
  data: IDataType
}

// 服务器返回用户信息相关的数据类型
interface IUserInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface IUser {
  checkUser: IUserInfo
}

export interface IUserResponseData {
  code: number
  data: IUser
}
