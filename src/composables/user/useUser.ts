import { ref } from 'vue'
import { Result } from '@/http/request'
import { EditType } from '@/utils/baseEnum'
import useInstance from '@/hooks/useInstance'
import { AddAndEditUserModel } from '@/api/user/userModel'
import { addUserApi, editUserApi, deleteUserApi } from '@/api/user/user'

export default function useUser(getUserList: any) {
    //globale property
    const { global } = useInstance()

    //分配角色组件的ref属性
    const assignRoleRef = ref<{ show: (name: string, userId: string | number) => void }>()

    const userAddRef = ref<{ show: (type: string, row?: AddAndEditUserModel) => void }>()

    const addBtn = () => {
        console.log('addBtn')
        userAddRef.value?.show(EditType.ADD)
    }
    const editBtn = (row: AddAndEditUserModel) => {
        console.log('editBtn', row)
        userAddRef.value?.show(EditType.EDIT, row)
    }
    const deleteBtn = async (id: number) => {
        console.log('deleteBtn', id)
        let param = {
            id: id
        }
        let confirm = await global.$myconfirm('确定删除该数据吗?')
        if (confirm) {
            let res = await deleteUserApi(param)
            if (res && res.code == 200) {
                global.$message({ message: res.msg, type: 'success' })
                getUserList()
            }
        }
    }
    const assignBtn = (row: AddAndEditUserModel) => {
        assignRoleRef.value?.show(row.loginName, row.id)
    }

    const save = async (param: AddAndEditUserModel) => {
        console.log('父组件接收的参数==>', param)
        let res: Result
        if (param.type == EditType.ADD) {
            res = await addUserApi(param)
        } else {
            res = await editUserApi(param)
        }
        if (res && res.code == 200) {
            //刷新列表
            getUserList()
            //信息提示
            global.$message({ message: res.msg, type: 'success' })
        }
    }

    return {
        addBtn,
        editBtn,
        deleteBtn,
        assignBtn,
        save,
        userAddRef,
        assignRoleRef
    }
}