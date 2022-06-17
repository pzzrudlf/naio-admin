import http from '@/http/http'
import { AddAndEditDeptModel, ListParam } from './deptModel'

enum Api {
    getDeptList = '/api/department/list',
    getParent = '/api/department/parent',
    add = '/api/department',
    edit = '/api/department',
    delete = '/api/department',
}

//部门列表
export const getDeptListApi = async (param: ListParam) => {
    return await http.get(Api.getDeptList, param)
}

//查询上级部门的树
export const getDeptParentApi = async () => {
    return await http.get(Api.getParent)
}

//新增
export const addDeptApi = async (param: AddAndEditDeptModel) => {
    return await http.post(Api.add, param)
}

//编辑
export const editDeptApi = async (param: AddAndEditDeptModel) => {
    return await http.put(Api.edit, param)
}

//删除
export const deleteDeptApi = async (param: any) => {
    return await http.delete(Api.delete, param)
}