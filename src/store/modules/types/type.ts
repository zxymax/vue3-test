import type { RouteRecordRaw } from 'vue-router'
export interface IUserState {
  token: string | null
  menuRoutes: RouteRecordRaw[]
}
