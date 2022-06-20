import { defineStore } from 'pinia'
import { loginApi, getInfoApi } from '@/api/admin/admin'
import { Type, IAdminState } from './type'
import { LoginParam } from '@/api/admin/adminModel'
import { Result } from '@/http/request'
import { setToken as baseSetToken, setAdminId, setExpireTime, getToken } from '@/utils/auth'

export const useAdminStore = defineStore({
    id: Type.ADMIN,
    state: (): IAdminState => {
        return {
            token: getToken() || '',
            adminId: '',
            permissions: []
        }
    },
    // computed 修改state的值, 有缓存的
    getters: {
        getToken(): string {
            return this.token
        },
        getPermissions(): any[] {
            return this.permissions
        }
    },
    //既可以同步也可以异步，提交state
    actions: {
        setToken(token: string) {
            this.$state.token = token
        },
        setAdminId(adminId: string | number) {
            this.$state.adminId = adminId
        },
        login(admininfo: LoginParam) {
            return new Promise<Result>((resolve, reject) => {
                loginApi(admininfo).then((res) => {
                    if (res.code == 200) {
                        // 设置到pinia中
                        this.setToken(res.token)
                        this.setAdminId((res.id))

                        //存储到sessionStorage
                        baseSetToken(res.token)
                        setAdminId(res.id)
                        setExpireTime(res.expireTime)
                    }
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        //获取用户信息
        getInfo() {
            return new Promise((resolve, reject) => {
                getInfoApi().then(res => {
                    //设置权限
                    if (res.code == 200) {
                        this.setRoles(res.data.roles)
                    }
                    resolve(res)
                }).catch((error) => {
                    reject(error)
                })
            })
        },
        setRoles(roles: any[]) {
            this.$state.permissions = roles
        }
    }
})