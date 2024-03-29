import { reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { AddAndEditRoleModel } from '@/api/role/roleModel'
import { EditType, Title } from '@/utils/baseEnum'
import { DialogModel } from '@/utils/baseType'
import useInstance from '@/hooks/useInstance'

export default function useAddAndEditRole(dialog: DialogModel, onClose: any, onShow: any, emit: any) {

    const { global } = useInstance()
    
    const addRoleForm = ref<InstanceType<typeof ElForm>>()

    const addRoleModel = reactive<AddAndEditRoleModel>({
        id: '',
        name: '',
        remark: '',
        createUser: '',
        type: ''
    })

    const rules = reactive({
        name: [{
            required: true,
            trigger: 'change',
            message: '请填写角色名称'
        }]
    })
    //确定
    const confirm = () => {
        addRoleForm.value?.validate((valid)=>{
            if(valid){
                emit('save', addRoleModel)
                onClose()
            }
        })  
    }
    //显示弹框
    const show = (type: string, row: AddAndEditRoleModel) => {
        //设置弹框标题
        type == EditType.ADD ? dialog.title = Title.ADD : Title.EDIT
        //显示弹框
        onShow()
        global.$resetForm(addRoleForm.value, addRoleModel)
        //如果是编辑，要把编辑的数据复制到表单绑定的model里面
        if (type == EditType.EDIT) {
            global.$objCopy(row, addRoleModel)
        }
        addRoleModel.type = type
    }
    return {
        confirm, show, addRoleForm, addRoleModel, rules
    }
}