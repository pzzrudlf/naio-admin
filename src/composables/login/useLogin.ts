import { getCurrentInstance } from 'vue'
import router from '@/router'
import { useUserStore } from '@/store/user'
import { LoginParam } from '@/api/user/userModel'

export default function useLogin(loginModel: LoginParam) {
    const userStore = useUserStore()
    const { proxy } = getCurrentInstance() as any
    //登录提交
    const login = () => {
        proxy.$refs.formRef.validate(async (valid: boolean) => {
            if (valid) {
                userStore.login(loginModel).then(res=>{
                    if(res.data.code == 200) router.push({path:'/'})
                })
            }
        })
    }
    return {
        login
    }
}