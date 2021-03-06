import { ref } from 'vue'
import { Result } from '@/http/request'
import { EditType } from '@/utils/baseEnum'
import useInstance from '@/hooks/useInstance'
import { AddAndEditMenuModel, MenuModel } from '@/api/menu/menuModel'
import { addMenuApi, deleteMenuApi, editMenuApi } from '@/api/menu/menu'

export default function useMenu(getMenuTable: any) {
    
    const { global } = useInstance()

    const addMenuRef = ref<{ show: (type: string, row?: MenuModel) => void }>()

    const addBtn = () => {
        addMenuRef.value?.show(EditType.ADD)
    }

    const editBtn = (row: MenuModel) => {
        addMenuRef.value?.show(EditType.EDIT, row)
    }

    const deleteBtn = async(id: number) => {
        let confirm = await global.$myconfirm('确定删除该数据吗?')
        if (confirm) {
            let res = await deleteMenuApi(id)
            if (res && res.code == 200) {
                global.$message({ message: res.msg, type: 'success' })
                getMenuTable()
            }
        }
    }

    const save = async (param: AddAndEditMenuModel) => {
        let res: Result
        if (param.type == EditType.ADD) {
            res = await addMenuApi(param)
        } else {
            res = await editMenuApi(param)
        }
        if (res && res.code == 200) {
            //信息提示
            global.$message({ message: res.msg, type: 'success' })
            //刷新列表
            getMenuTable()
        }
    }
    
    return {
        addBtn, editBtn, deleteBtn, save, addMenuRef
    }
}