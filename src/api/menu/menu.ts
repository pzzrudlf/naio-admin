import http from '@/http/http'
import { AddAndEditMenuModel } from './menuModel'

enum Api {
    getMenuList = '/api/auth/menu',
    getTable = '/api/menu/list',
    getParent = '/api/menu/parent',
    add = '/api/menu',
    edit = '/api/menu',
    delete = '/api/menu',
}

export const getMenuListApi = async () => {
    return await http.get(Api.getMenuList)
}

export const getMenuTableApi = async () => {
    return await http.get(Api.getTable)
}

export const getParentApi = async () => {
    return await http.get(Api.getParent)
}
//新增
export const addMenuApi = async (param: AddAndEditMenuModel) => {
    return await http.post(Api.add, param)
}
//编辑
export const editMenuApi = async (param: AddAndEditMenuModel) => {
    return await http.put(Api.edit, param)
}
//删除
export const deleteMenuApi = async (id: number) => {
    return await http.delete(Api.delete, { id: id })
}