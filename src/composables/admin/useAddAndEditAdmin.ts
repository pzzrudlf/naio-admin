import { ref } from 'vue'
import { ElForm } from 'element-plus'
import useInstance from '@/hooks/useInstance'
import { DialogModel } from '@/utils/baseType'
import { SelectNode } from '@/api/dept/deptModel'
import { AddAndEditAdminModel } from '@/api/admin/adminModel'
import { EditType, Title } from '@/utils/baseEnum'

export default function useAddAndEditAdmin(dialog: DialogModel, onShow: any, onClose: any, addModel: AddAndEditAdminModel, emit: any) {

    const { global } = useInstance()

    const addAdminForm = ref<InstanceType<typeof ElForm>>()

    const confirm = () => {
        addAdminForm.value?.validate((valid) => {
            if (valid) {
                emit('save', addModel)
                onClose()
            }
        })
    }

    const show = (type: string, row: AddAndEditAdminModel) => {
        type == EditType.ADD ? dialog.title = Title.ADD : dialog.title = Title.EDIT
        onShow()
        //清空表单
        global.$resetForm(addAdminForm.value, addModel)
        //如果是编辑，要把编辑的数据复制到表单绑定的model里面
        if (type == EditType.EDIT) {
            global.$objCopy(row, addModel)
        }
        //设置是新增还是编辑
        addModel.type = type
    }

    //选中上级的数据
    const select = (node: SelectNode) => {
        addModel.deptId = node.id
        addModel.deptName = node.name
    }

    return {
        confirm, show, addAdminForm, select
    }
}