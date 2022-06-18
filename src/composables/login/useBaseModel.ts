import { reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { LoginParam } from '@/api/user/userModel'
import { validatePassword } from '@/utils/validator'

export default function useBaseModel(){
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginModel = reactive<LoginParam>({
        username:'admin',
        password:'1234',
        code: ''
    })
    const loginRules = reactive({
        username:[{
            required:true,
            trigger:'blur',
            message:'请填写登录账户'
        }],
        password:[{
            required:true,
            trigger:'blur',
            validator: validatePassword()
        }],
        code: [{
            required: true,
            tigger: 'blur',
            message:'请填写验证码'
        }]
    })
    return {
        loginModel,
        loginRules,
        formRef
    }
}