import { reactive } from 'vue'
import { AddAndEditAdminModel } from '@/api/admin/adminModel'

export default function useBaseModel(){
    //表单绑定的数据
    const addModel = reactive<AddAndEditAdminModel>({
        type:'',
        id: '',
        deptId: '',
        deptName: '',
        loginName: '',
        mobile: '',
        nickName: '',
        email: '',
        username: '',
        password: '',
        sex: '',
    })
    const rules = reactive({
        deptName: [
            {
                required: true,
                message: '请选择上级部门',
                trigger: 'change'
            }
        ],
        loginName: [
            {
                required: true,
                message: '请填写姓名',
                trigger: 'change'
            }
        ],
        mobile: [
            {
                required: true,
                message: '请填写手机号',
                trigger: 'change'
            }
        ],
        username: [
            {
                required: true,
                message: '请填写登录名',
                trigger: 'change'
            }
        ],
        password: [
            {
                required: true,
                message: '请填写密码',
                trigger: 'change'
            }
        ],
        sex: [
            {
                required: true,
                message: '请填写性别',
                trigger: 'change'
            }
        ],
    })

    return {
        addModel,
        rules 
    }
}