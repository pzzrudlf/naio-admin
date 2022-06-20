import { Directive } from 'vue'
import { useAdminStore } from '@/store/admin'

export const permission: Directive = {
    mounted(el, binding) {
        const adminStore = useAdminStore()
        // value按钮上的权限
        const { value } = binding
        // 获取用户所有的权限
        const permissions = adminStore.getPermissions
        if (value && value instanceof Array && value.length > 0) {
            const permissionRoles = value
            const hasPermission = permissions.some((role) => {
                return permissionRoles.includes(role)
            })
            if (!hasPermission) {
                el.style.display = 'none'
            }
        } else {
            throw new Error('need roles! Like v-permission="[\'add\',\'edit\']"')
        }
    }
}