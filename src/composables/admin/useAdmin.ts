import { ref } from 'vue'
import { Result } from '@/http/request'
import { EditType } from '@/utils/baseEnum'
import useInstance from '@/hooks/useInstance'
import { AddAndEditAdminModel } from '@/api/admin/adminModel'
import { addAdminApi, editAdminApi, deleteAdminApi } from '@/api/admin/admin'

export default function useAdmin(getAdminList: any) {

    const { global } = useInstance()

    //分配角色组件的ref属性
    const assignRoleRef = ref<{ show: (name: string, userId: string | number) => void }>()

    const adminAddRef = ref<{ show: (type: string, row?: AddAndEditAdminModel) => void }>()

    const addBtn = () => {
        adminAddRef.value?.show(EditType.ADD)
    }
    const editBtn = (row: AddAndEditAdminModel) => {
        adminAddRef.value?.show(EditType.EDIT, row)
    }
    const deleteBtn = async (id: number) => {
        let param = {
            id: id
        }
        let confirm = await global.$myconfirm('确定删除该数据吗?')
        if (confirm) {
            let res = await deleteAdminApi(param)
            if (res && res.code == 200) {
                global.$message({ message: res.msg, type: 'success' })
                getAdminList()
            }
        }
    }
    const assignBtn = (row: AddAndEditAdminModel) => {
        assignRoleRef.value?.show(row.loginName, row.id)
    }

    const save = async (param: AddAndEditAdminModel) => {
        let res: Result
        if (param.type == EditType.ADD) {
            res = await addAdminApi(param)
        } else {
            res = await editAdminApi(param)
        }
        if (res && res.code == 200) {
            //刷新列表
            getAdminList()
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
        adminAddRef,
        assignRoleRef
    }
}