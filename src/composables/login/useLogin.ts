import { getCurrentInstance } from 'vue'
import router from '@/router'
import { useAdminStore } from '@/store/admin'
import { LoginParam } from '@/api/admin/adminModel'

export default function useLogin(loginModel: LoginParam) {
    const adminStore = useAdminStore()
    const { proxy } = getCurrentInstance() as any
    const login = () => {
        proxy.$refs.formRef.validate(async (valid: boolean) => {
            if (valid) {
                adminStore.login(loginModel).then(res=>{
                    if(res.code == 200) router.push({path:'/'})
                })
            }
        })
    }
    return {
        login
    }
}