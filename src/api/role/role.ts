import http from '@/http/http'
import { AddAndEditRoleModel, DeleteRoleParam, RoleListParam, AssignTreeParam, AssignSaveParam } from './roleModel'

enum Api {
    getList = '/api/role/list',
    addRole = '/api/role',
    editRole = '/api/role',
    deleteRole = '/api/role',
    assignTree = '/api/role/getAssignPermissionTree',
    assignSave = '/api/role/roleAssignSave',
}
//角色列表
export const getRoleListApi = async (param: RoleListParam) => {
    return await http.get(Api.getList, param)
}
//新增
export const addRoleApi = async (param: AddAndEditRoleModel) => {
    return await http.post(Api.addRole, param)
}
//编辑
export const editRoleApi = async (param: AddAndEditRoleModel) => {
    return await http.put(Api.editRole, param)
}
//删除
export const deleteRoleApi = async (param: DeleteRoleParam) => {
    return await http.delete(Api.deleteRole, param)
}

//分配权限树的数据
export const assignTreeApi = async (param: AssignTreeParam) => {
    return await http.get(Api.assignTree, param)
}
//分配权限保存
export const assignSaveApi = async (param: AssignSaveParam) => {
    return await http.post(Api.assignSave, param)
}