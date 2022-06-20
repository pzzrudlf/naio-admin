import http from '@/http/http'
import { AddAndEditAdminModel, AssignRoleListParam, SelectRoleParam, LoginParam, AdminInfo, AdminListParam } from './adminModel'

enum Api {
    login = '/api/login', //post
    getInfo = '/api/auth/info', //get
    logout = '/api/logout', //post
    getLeftTree = '/api/department/list', //get
    getAdminList = '/api/admin/list', //get
    addAndEditAdmin = '/api/admin', //post || put || delete
    getRoleList = '/api/admin/getRolistForAssign', //get
    getRoleId = '/api/admin/getRoleIdByUserId', //get
    assignSave = '/api/admin/assingRole', //post
}

//登录
export async function loginApi(param: LoginParam) {
    let temp = {
        username: param.username,
        password: param.password
    }
    return await http.post(Api.login, temp)
}

//获取验证码
export async function getImageApi() {
    return await http.getImage('')
}

//获取用户信息
export const getInfoApi = async () => {
    return await http.get<AdminInfo>(Api.getInfo)
}

//获取用户部门树
export const getLeftTreeApi = async () => {
    return await http.get(Api.getLeftTree)
}

//获取用户列表
export const getAdminListApi = async (param: AdminListParam) => {
    return await http.get(Api.getAdminList, param)
}

export const addAdminApi = async (param: AddAndEditAdminModel) => {
    return await http.post(Api.addAndEditAdmin, param)
}

export const editAdminApi = async (param: AddAndEditAdminModel) => {
    return await http.put(Api.addAndEditAdmin, param)
}

export const deleteAdminApi = async (param) => {
    return await http.delete(Api.addAndEditAdmin, param)
}

export const loginOutApi = async (param) => {
    return await http.post(Api.logout, param)
}

export const getRoleListApi = async (param: AssignRoleListParam) => {
    return await http.get(Api.getRoleList, param)
}

export const getRoleIdApi = async (userId: number | string) => {
    return await http.getRestApi(Api.getRoleId, { userId: userId })
}

export const assingRoleSaveApi = async (param: SelectRoleParam) => {
    return await http.post(Api.assignSave, param)
}