import { ref } from 'vue'
import { EditType } from '@/utils/baseEnum'

export default function useDrawer() {
    const drawerRef = ref<{ show: (type: string) => void }>()
    
    const showDrawer = ()=>{
        drawerRef.value?.show(EditType.ADD)
    }

    return {
        showDrawer,
        drawerRef
    }
}